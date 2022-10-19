//let entrada = document.getElementById('entrada');
let btn = document.getElementById('btnCalcula');
let res = document.getElementById('soma-juros');

function calcula() {
    let valor = Number(document.getElementById('valor').value);
    let taxa = Number(document.getElementById('taxa').value);
    taxa = taxa / 100.0;
    let parcela = Number(document.getElementById('parcela').value);

    let corpo = document.getElementById('corpo-tabela');
    let select = document.getElementById('opcao');

    select.addEventListener('change', function () {
        console.log(select.value)
    });

    corpo.innerHTML = '';

    let somaJuros = 0.0;

    if (select.value == 'sac') {
        const amortizacao = valor / parcela;


        for (let i = 1; i <= parcela; i++) {
            let juros = valor * taxa;
            somaJuros += juros;
            let pmt = juros + amortizacao;
            valor -= amortizacao;
            corpo.innerHTML += `<tr>
                                    <th scope="row">${i}</th>
                                    <td>R$${pmt.toFixed(2)}</td>
                                    <td>R$${juros.toFixed(2)}</td>
                                    <td>R$${amortizacao.toFixed(2)}</td>
                                    <td>R$${valor.toFixed(2)}</td>
                                </tr>`
        }
        res.innerHTML = `<h3>Total de juros R$ ${somaJuros.toFixed(2)}</h3>`;
    }
    else {
        const pmt = (valor * taxa * Math.pow(1 + taxa, parcela)) / (Math.pow(1 + taxa, parcela) - 1);

        for (let i = 1; i <= parcela; i++) {
            let juros = valor * taxa;

            somaJuros += juros;

            let amortizacao = pmt - juros;
            valor -= amortizacao;
            corpo.innerHTML += `<tr>
                                    <th scope="row">${i}</th>
                                    <td>R$${pmt.toFixed(2)}</td>
                                    <td>R$${juros.toFixed(2)}</td>
                                    <td>R$${amortizacao.toFixed(2)}</td>
                                    <td>R$${valor.toFixed(2)}</td>
                                </tr>`
        }
        res.innerHTML = `<h3>Total de juros R$ ${somaJuros.toFixed(2)}</h3>`;
    }

}

btn.addEventListener('click', calcula);