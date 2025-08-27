let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

let desafios = {
    btnD1: () => dialogGeneric("h1", "Verificar lista", listaGenerica.length == 0 ? "[ sin elementos ]" : `[ ${listaGenerica} ]`)
    // btnD1: () => verificarListaVacia()
};

Object.keys(desafios).forEach(id => {
    document.getElementById(id).addEventListener("click", desafios[id]);
});

// TODO: En los botones quitar el Onclic
// TODO: adicionar un id a los botones y sincronizar al js
// TODO: poner estilos a los botones
// TODO: poner estilos al dialog , opcional animacion

function verificarListaVacia() {
    listaGenerica == null ? "esta vacio" : "tiene elementos";
    console.log("heyy");

}

function MostrarListaGeneral() {
    asignarTextoElemento('#resultado', listaGenerica);
}

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}


const dialog = document.getElementById("dialog-model");

function dialogGeneric(etiquetaHTML, titulo, resultado) {
    dialog.innerHTML = `
    <label>${titulo}</label><br>
    <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
    <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
  `;
    dialog.showModal();
}

document.querySelector("#dynamicBtn").setAttribute("onclick", "dialogGeneric('input', 'mensaje desde setAttribute', ' todabia no hay resultado')");

// function dialogGeneric(id, msg) {
//     alert(`ID: ${id} | Mensaje: ${msg}`);
//   }










// const btn = document.getElementById("dynamicBtn").addEventListener("click", e => {
//     dialogGeneric(1, "holaa");
// });

// const dialog = document.getElementById("myDialog");
// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");

// openBtn.addEventListener("click", () => dialog.show());
// closeBtn.addEventListener("click", () => dialog.close());

// //modal 3
// const dlg = document.getElementById("eventDialog");
// dlg.addEventListener("close", () => {
//     alert("Elegiste: " + dlg.returnValue);
// });

// //modal 4
// const d = document.getElementById("outsideDialog");
// d.addEventListener("click", (e) => {
//     if (e.target === d) d.close();
// });

//modal 5

//modal 6
