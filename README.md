# 📌 Multiplicación de Matrices

Este proyecto es una aplicación web que permite multiplicar matrices ingresadas por el usuario. Está desarrollado con **Flask (Python)** en el backend y **JavaScript (con Tailwind CSS)** en el frontend.

---

## 📂 Estructura del Proyecto

```
📁 multiplica-matrices
│── 📄 server.py            # Servidor Flask
│── 📄 templates/
│   └── 📄 index.html    # Interfaz de usuario
│── 📄 static/
│   └── 📄 app.js        # Lógica en JavaScript
│── 📄 README.md         # Documentación
```

---

## 🚀 Instalación y Ejecución

### 🔹 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/multiplica-matrices.git
cd multiplica-matrices
```

### 🔹 2. Crear y activar un entorno virtual (Opcional pero recomendado)

```bash
python -m venv venv
source venv/bin/activate  # En Mac/Linux
venv\Scripts\activate     # En Windows
```

### 🔹 3. Instalar dependencias

```bash
pip install flask numpy
```

### 🔹 4. Ejecutar el servidor

```bash
python app.py
```

El servidor se ejecutará en **http://127.0.0.1:5000/**

---

## 🖥️ Uso de la Aplicación

1. Ingresar el número de **filas y columnas** de la Matriz 1 y la cantidad de **columnas** de la Matriz 2.
2. Hacer clic en **"Generar Inputs"** para ingresar los valores de las matrices.
3. Llenar todas las casillas con valores numéricos.
4. Presionar el botón **"Multiplicar Matrices"** para obtener el resultado.

---

## 🔧 Tecnologías Utilizadas

- **Flask** (Python) - Backend
- **NumPy** - Operaciones con matrices
- **JavaScript** - Manipulación del DOM
- **Tailwind CSS** - Estilización
