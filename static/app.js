function generarInputs() {
  const filas = parseInt(document.getElementById("filas").value);
  const columnas = parseInt(document.getElementById("columnas").value);
  const columnas2 = parseInt(document.getElementById("columnas2").value);
  const contenedor = document.getElementById("matrices");
  const botonMultiplicar = document.getElementById("multiplicarBtn");
  contenedor.innerHTML = "";
  botonMultiplicar.classList.add("hidden");

  if (!validarEntradas(filas, columnas, columnas2)) return;

  const matrices = [
    { nombre: "Matriz 1", filas, columnas },
    { nombre: "Matriz 2", filas: columnas, columnas: columnas2 },
  ];
  matrices.forEach(({ nombre, filas, columnas }) => {
    const div = document.createElement("div");
    div.classList.add("p-4", "bg-gray-50", "rounded-lg", "shadow-md");
    div.innerHTML = `<h3 class='font-bold mb-2 text-lg text-center'>${nombre}</h3>`;
    for (let i = 0; i < filas; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("flex", "justify-center");

      for (let j = 0; j < columnas; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className =
          "border w-12 p-2 m-1 text-center rounded shadow-sm focus:ring focus:ring-blue-300";
        input.id = `${nombre.replace(" ", "")}_${i}_${j}`;
        rowDiv.appendChild(input);
      }
      div.appendChild(rowDiv);
    }
    contenedor.appendChild(div);
  });

  botonMultiplicar.classList.remove("hidden");
}
function multiplicarMatrices() {
  const filas1 = parseInt(document.getElementById("filas").value);
  const columnas1 = parseInt(document.getElementById("columnas").value);
  const columnas2 = parseInt(document.getElementById("columnas2").value);
  const filas2 = columnas1;

  const matriz1 = capturarValores("Matriz1", filas1, columnas1);
  const matriz2 = capturarValores("Matriz2", filas2, columnas2);

  if (!matriz1 || !matriz2) {
    alert("Todos los campos deben contener valores numéricos.");
    return;
  }

  fetch("/multiplicar_matrices", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ matriz1, matriz2 }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        mostrarResultado(data.resultado);
      }
    })
    .catch((error) => {
      alert("Hubo un error al enviar los datos.");
      console.error("Error:", error);
    });
}

function mostrarResultado(matriz) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h3 class='font-bold text-lg text-center mb-2'>Matriz Resultado</h3>
    <div class="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
      ${matriz
        .map(
          (fila) =>
            `<div class="flex justify-center">${fila
              .map(
                (num) =>
                  `<span class='border w-12 p-2 m-1 inline-block text-center rounded shadow-sm bg-white'>${num}</span>`
              )
              .join("")}</div>`
        )
        .join("")}
    </div>
  `;
  resultadoDiv.classList.remove("hidden");
}

function validarEntradas(filas, columnas, columnas2) {
  if (
    filas <= 0 ||
    columnas <= 0 ||
    columnas2 <= 0 ||
    isNaN(filas) ||
    isNaN(columnas) ||
    isNaN(columnas2)
  ) {
    alert("Las filas y columnas deben ser mayores a 0 y números válidos.");
    return false;
  }
  return true;
}

function capturarValores(idBase, filas, columnas) {
  let matriz = [];
  for (let i = 0; i < filas; i++) {
    let row = [];
    for (let j = 0; j < columnas; j++) {
      let val = document.getElementById(`${idBase}_${i}_${j}`).value;
      if (!val || isNaN(val)) return null;
      row.push(Number(val));
    }
    matriz.push(row);
  }
  return matriz;
}
