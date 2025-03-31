from flask import Flask, request, jsonify, render_template
import numpy as np
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/multiplicar_matrices', methods=['POST'])
def multiplicar_matrices():
    data = request.json
    matriz1 = np.array(data['matriz1'])
    matriz2 = np.array(data['matriz2'])
    if matriz1.shape[1] != matriz2.shape[0]:
        return jsonify({'error': 'El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz'}), 400

    resultado = np.dot(matriz1, matriz2)
    return jsonify({'resultado': resultado.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
