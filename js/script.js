'use strict';
let txtEntrada = document.querySelector('#valorInicial');
let txtNumerador = document.getElementById('numerador');
let txtDenominador = document.getElementById('denominador');
let btnAdiciona = document.getElementById('adiciona');
let checkInversa = document.getElementById('inversa');
let contadorElementos = document.getElementById('contadorElementos');
let resultado = document.querySelector('#resultado');
let btnLimpa = document.querySelector('#limpa');
let btnCalcula = document.querySelector('#calcula');
let elementoTabela = document.querySelector('#elementos');

let contador = 0;
let produto = 1;

function adicionarElemento() {
    let numerador = Number(txtNumerador.value);
    let denominador = Number(txtDenominador.value);
    let tipo = '&#129045 diretamente';

    if (checkInversa.checked) {
        produto = produto * denominador / numerador;
        tipo = '&#129047; inversamente';
    }
    else {
        produto = produto * numerador / denominador;
        tipo = '&#129045 diretamente';
    }
    txtNumerador.value = '';
    txtDenominador.value = '';
    checkInversa.checked = false;
    contador++;

    elementoTabela.innerHTML +=
        `<tr>
            <th scope="row">${contador}</th>
            <td>${numerador}</td>
            <td>${denominador}</td>
            <td>${tipo}</td>
        </tr>`;

    contadorElementos.innerHTML = `Elementos adicionados ${contador}`;
    resultado.innerHTML = `O Valor do produto é ${produto}<br>`;
    resultado.innerHTML += `Numerador adicionado ${numerador} , Denominador adicionado ${denominador}, Valor inicial ${entrada}`;
}

btnAdiciona.addEventListener('click', adicionarElemento);

function limparDados() {
    txtEntrada.value = '';
    txtNumerador.value = '';
    txtDenominador.value = '';
    elementoTabela.innerHTML = '';

    produto = 1;
    contador = 0;
}

btnLimpa.addEventListener('click', limparDados);

function calcularValor() {
    let entrada = Number(txtEntrada.value);

    if (contador > 0 && entrada > 0) {
        let res = entrada / produto;
        resultado.innerHTML = `<h3>Resultado = ${res}</h3>`;
    }
    else {
        alert('Está faltando dados');
    }
}

btnCalcula.addEventListener('click', calcularValor);