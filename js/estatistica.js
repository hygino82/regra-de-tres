let inicial = document.querySelector('#inicial');
let final = document.querySelector('#final');
let tamanho = document.querySelector('#tamanho');

let btnAdicionaElemento = document.querySelector('#btnAdicionaElemento');
//let btnIntervalo = document.querySelector('#btnIntervalo');
let btnLimpar = document.querySelector('#btnLimpar');
let btnMostrarLista = document.querySelector('#btnMostraLista');

let corpoTabela = document.querySelector('#corpo-tabela');
let mostrarSaida = document.querySelector('#saida');
let contagem = document.querySelector('#contagem');

let contador = 0;

let listaElementos = [];
let intervalos = [];

function adicionarLista(valor, x) {
    for (let i = 0; i < x; i++) {
        listaElementos.push(valor);
    }
    console.log(`O valor ${valor} foi repetido ${x} vezes`);
    contador += x;

    contagem.innerHTML = `Total adicionado ${contador}`
}

function adicionarElementos() {
    let txtValor = document.querySelector('#valor');
    let txtRepeticao = document.querySelector('#repeticao');
    let valor = Number(txtValor.value);
    let repeticao = Number(txtRepeticao.value);

    if (valor > 0 && repeticao > 0) {
        adicionarLista(valor, repeticao);
        txtValor.value = '';
        txtRepeticao.value = '';
    }
    else {
        alert('Preencha todos os capos!');
    }
}

btnAdicionaElemento.addEventListener('click', adicionarElementos);

function gerarIntervalos() {
    let min = Number(inicial.value);
    let max = Number(final.value);

    intervalos = [];

    if (max > min && listaElementos.length > 0) {
        let a = min;
        let b = min;
        let intervalo = Number(tamanho.value);

        while (b <= max) {
            a = b;
            b = a + intervalo;
            let quantidade = listaElementos.filter(x => x >= a && x < b);//filtra os elementos que estejam no intervalo
            if (quantidade.length !== 0) {
                intervalos.push([a, b, quantidade.length]);
            }
        }
        gerarTabela();
        return true;
    }

    alert('O valor inicial deve ser menor que o final!');
    return false;
}


function gerarTabelaCompleta() {

    if (gerarIntervalos()) {
        mostrarSaida.style.display = 'block';
    }
    else {
        mostrarSaida.style.display = 'none';
    }
}

btnMostrarLista.addEventListener('click', gerarTabelaCompleta);

function gerarTabela() {
    let titulo = String(document.querySelector('#titulo').value);
    let tipoPesquisa = document.querySelector('#tipoPesquisa');

    tipoPesquisa.innerHTML = titulo;
    let freqAcumulada = 0;
    let freqPercentualAcumulada = 0;
    let total = listaElementos.length;
    corpoTabela.innerHTML = '';
    intervalos.map((x, index) => {
        freqAcumulada += x[2];
        let freqRelativa = freqAcumulada / total;
        let freqRelativaPercentual = freqRelativa * 100.0;
        freqPercentualAcumulada = freqAcumulada / 2;

        corpoTabela.innerHTML +=
            `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${x[0]} &#10152; ${x[1]}</td>
                <td>${x[2]}</td>
                <td>${freqAcumulada}</td>
                <td>${freqRelativa.toFixed(3)}</td>
                <td>${freqRelativaPercentual.toFixed(3)}</td>
                <td>${freqPercentualAcumulada}</td>
            </tr>
            `;
    });
}

function limparDados() {
    alert('Limpando dados dos registros');
    intervalos = [];
    listaElementos = [];
    mostrarSaida.style.display = 'none';
    contador = 0;
}

btnLimpar.addEventListener('click', limparDados);