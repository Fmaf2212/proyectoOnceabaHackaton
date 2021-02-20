const listaCursos = document.querySelector('.carreras__content');
const cursos = document.getElementById('cursos');
const cursos2 = document.getElementById('cursos2');
const cursos3 = document.getElementById('cursos3');

initAPP();
document.addEventListener('load', initAPP);
function initAPP() {
    listaCursos.addEventListener('click', obtenerCurso)
}

function obtenerCurso(e) {
    if (e.target.classList.contains('agregarCarrito')) {
        const curso = e.target.parentElement;
        const curso2 = e.target.parentElement;
        const curso3 = e.target.parentElement;
        extraerDatos(curso,curso2,curso3);
    }
}


function extraerDatos(curso,curso2,curso3) {
    const cursoElegido = {
        span: curso.querySelector('span').textContent
    }
    const cursoElegido2 = {
        nombre: curso2.querySelector('h3').textContent,
    }
    const cursoElegido3 = {
        precio: curso3.querySelector('strong').textContent,
    }
    pintarCurso(cursoElegido,cursoElegido2,cursoElegido3);
}

function pintarCurso(curso,curso2,curso3) {
    let container2 = document.createElement('div');
    let container3 = document.createElement('div');
    let img = document.createElement('img');
    let nombre = document.createElement('p');
    let precio = document.createElement('p');
    let span;
    img.src='img/imgProduct2.jpg';
    span=curso.span;

    nombre = curso2.nombre;
    precio = curso3.precio;
    container2.innerHTML = `
        <div>
           ${nombre}
        </div>
    `
    container3.innerHTML = `
        <div>
            ${precio}
        </div>
    `

    cursos2.appendChild(container2);
    cursos3.appendChild(container3);
    if(span==2){
        img.src='img/imgProduct2.jpg';
        cursos.appendChild(img); 
    }
    else if(span==1){
        img.src='img/imgProduct1.png';
        cursos.appendChild(img); 
    }
    
}