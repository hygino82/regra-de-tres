let btnCalcula = document.querySelector('#btn-calcula');
let resultado = document.querySelector('#resultado');
let txt_a = document.querySelector('#valor-a');
let txt_b = document.querySelector('#valor-b');
let txt_c = document.querySelector('#valor-c');

function calcularValores() {

    let a = Number(txt_a.value);

    if (a == 0) {
        alert('O valor de a não pode ser nulo!');
    }
    else {
        let b = Number(txt_b.value);
        let c = Number(txt_c.value);

        let delta = b * b - 4 * a * c;

        let xv = -b / (2 * a);
        let yv = -delta / (4 * a);

        resultado.innerHTML = `delta = ${delta}<br>`;
        resultado.innerHTML += `xv = ${xv}<br>`;
        resultado.innerHTML += `yv = ${yv}<br>`;

        let tipoVertice = (a < 0) ? 'máximo' : 'mínimo';
        resultado.innerHTML += `O vertice da função é um ponto de ${tipoVertice}.`;

        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);

            resultado.innerHTML += '<h3>A função tem duas raízes reais distintas</h3>';
            resultado.innerHTML += `<h5> x1 = ${x1}</h5>`;
            resultado.innerHTML += `<h5> x2 = ${x2}</h5>`;
        }
        else if (delta == 0) {
            resultado.innerHTML += '<h3>A função tem duas raízes reais iguais</h3>';
            resultado.innerHTML += `<h5> x1 = x2 = ${xv}</h5>`;
        }
        else {
            resultado.innerHTML += '<h3>A função tem duas raízes complexas</h3>'
            let imaginaria = Math.sqrt(-delta) / (2 * a);

            if (xv != 0) {
                resultado.innerHTML += `<h5>x1 = ${xv} + ${imaginaria}i</h5>`;
                resultado.innerHTML += `<h5>x2 = ${xv} - ${imaginaria}i</h5>`;
            }
            else {
                resultado.innerHTML += `<h5>x1 = + ${imaginaria}i</h5>`;
                resultado.innerHTML += `<h5>x2 = - ${imaginaria}i</h5>`;
            }
        }
    }



}

btnCalcula.addEventListener('click', calcularValores);