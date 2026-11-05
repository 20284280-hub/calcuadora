// Obtener los elementos del DOM
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnMultiplicar = document.getElementById('multiplicar');
const btnDividir = document.getElementById('dividir');
const resultado = document.getElementById('resultado');

// Funciones para calcular
btnSumar.addEventListener('click', () => {
    const res = Number(num1.value) + Number(num2.value);
    resultado.textContent = `Resultado: ${res}`;
});

btnRestar.addEventListener('click', () => {
    const res = Number(num1.value) - Number(num2.value);
    resultado.textContent = `Resultado: ${res}`;
});

btnMultiplicar.addEventListener('click', () => {
    const res = Number(num1.value) * Number(num2.value);
    resultado.textContent = `Resultado: ${res}`;
});

btnDividir.addEventListener('click', () => {
    if (Number(num2.value) === 0) {
        resultado.textContent = 'Resultado: No se puede dividir entre 0';
    } else {
        const res = Number(num1.value) / Number(num2.value);
        resultado.textContent = `Resultado: ${res}`;
    }
});