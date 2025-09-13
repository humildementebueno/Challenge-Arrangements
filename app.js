let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
const todosLenguajesProgramacion = ['PYTHON', 'JAVASCRIPT', 'JAVA', 'C++', 'C#', 'SQL', 'PHP', 'SWIFT', 'GO (GOLANG)', 'KOTLIN'];

let listaNumerica = [];
let listaNumericaLlena = [15, 80, 5, 25, 88, 1, 6];

let mensajeValidacion = "";

const dialog = document.getElementById("dialog-model");



let desafios = {
    btnD1: () => dialogGeneric("h1", "Verificar lista", listaGenerica.length == 0 ? "[ sin elementos ]" : `[ ${listaGenerica} ]`, "btnD1"),
    btnD2: () => dialogGeneric("h1", "Lista de Programacion", lenguagesDeProgramacion, "btnD2"),
    btnD3: () => dialogGeneric("h1", "Lista de Programacion", mensajeValidacion, "btnD3"),
    btnD4: () => dialogGeneric("h1", "Lenguajes de Programacion", lenguagesDeProgramacion.length == 0 ? "[ sin elementos ]" : `[ ${lenguagesDeProgramacion} ]`, "btnD4"),
    btnD5: () => dialogGeneric("h1", "Lenguajes de Programacion - Orden Inverso", lenguagesDeProgramacion.reverse(), "btnD5"),
    btnD6: () => dialogGeneric("h1", "El Promedio de Numeros", listaNumerica, "btnD6"),
    btnD7: () => dialogGeneric("h1", "Comparacion de Numeros", listaNumericaLlena, "btnD7"),
    btnD8: () => dialogGeneric("h1", "Suma de Numeros", lenguagesDeProgramacion.reverse(), "btnD8"),
    btnD9: () => dialogGeneric("h1", "Devolver posicion del numero", lenguagesDeProgramacion.reverse(), "btnD9"),
    btnD10: () => dialogGeneric("h1", "Suma de elementos", lenguagesDeProgramacion.reverse(), "btnD10"),
    btnD11: () => dialogGeneric("h1", "Lista Cuadratica", lenguagesDeProgramacion.reverse(), "btnD11"),
    hijoBotonAdicion: () => dialogGeneric("", "",)

};

Object.keys(desafios).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", desafios[id]);
    } else {
        console.warn(`No existe el botón con id: ${id}`);
    }
});


// TODO: Completar el d6 al d11
// TODO: adicionar un id a los botones y sincronizar al js
// TODO: poner estilos a los botones
// TODO: poner estilos al dialog , opcional animacion




function adicionandoLenguaje() {
    let elemento = document.getElementById("elementoLenguaje").value;
    const cadena = elemento.toString().trim().toUpperCase();
    mensajeValidacion = document.getElementById("validador").value;
    console.log("Usuario ingresó:", cadena);
    if (todosLenguajesProgramacion.includes(cadena)) {
        mensajeValidacion = "¡Lenguaje válido!";
        // console.log("¡Lenguaje válido!");
        lenguagesDeProgramacion.push(cadena);
    } else {
        // Buscar coincidencias parciales
        const sugerencias = todosLenguajesProgramacion.filter(leng =>
            leng.includes(cadena) || cadena.includes(leng)
        );

        if (sugerencias.length > 0) {
            mensajeValidacion = `¿Quisiste decir alguno de estos?: ${sugerencias.join(", ")}`;
            // console.log("¿Quisiste decir alguno de estos?", sugerencias.join(", "));
        } else {
            // Buscar lenguaje más similar (por letras)
            const sugerido = todosLenguajesProgramacion.find(leng =>
                leng.startsWith(cadena[0]) // Ejemplo simple, puedes mejorar con algoritmos más avanzados
            );
            if (sugerido) {
                mensajeValidacion = `No se encontró "${cadena}". ¿Quisiste decir "${sugerido}"?`;
                // console.log(`No se encontró "${cadena}". ¿Quisiste decir "${sugerido}"?`);
            } else {
                mensajeValidacion = "Lenguaje no reconocido. Intenta nuevamente.";
                // console.log("Lenguaje no reconocido. Intenta nuevamente.");
            }
        }
    }
    // ¡Aquí actualizas el contenido del <p>!
    document.getElementById("validador").textContent = mensajeValidacion;
    // Color dinámico
    if (mensajeValidacion === "¡Lenguaje válido!") {
        document.getElementById("validador").style.color = "green";
    } else {
        document.getElementById("validador").style.color = "red";
    }

}

function calcularPromedio(primerNumero, segundoNumero, tercerNumero) {
    // Verificar que todos los valores sean números válidos
    if (
        primerNumero === "" ||
        segundoNumero === "" ||
        tercerNumero === "" ||
        isNaN(parseFloat(primerNumero)) ||
        isNaN(parseFloat(segundoNumero)) ||
        isNaN(parseFloat(tercerNumero))
    ) {
        return "Error: Ingrese los tres números correctamente";
    }
    let promedio = (parseFloat(primerNumero) + parseFloat(segundoNumero) + parseFloat(tercerNumero)) / 3;
    return promedio.toString();
}

function calculandoMenorMayor(listaNumerica) {
    let mayor = -1;
    let numerosEncontrados = [];
    listaNumerica.forEach(elem => {
        if (mayor < elem) {
            mayor = elem;
        }
    });
    numerosEncontrados.push(mayor);
    mayor = -1;
    listaNumerica.forEach(elem => {
        if (mayor > elem) {
            mayor = elem;
        }
    });
    numerosEncontrados.push(mayor);

    document.getElementById("resultadoMenorMayor").textContent = `El mayor y menor es [${numerosEncontrados[0]} , ${numerosEncontrados[1]}]`;
}




function dialogGeneric(etiquetaHTML, titulo, resultado, getBtnID) {
    switch (getBtnID) {
        case "btnD1":
            // lógica para btnD1
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;
            break;
        case "btnD2":
            lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
            resultado = lenguagesDeProgramacion.join(", ");
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;
            break;
        case "btnD3":
            dialog.innerHTML = `
                <${etiquetaHTML}>${titulo}</${etiquetaHTML}>
                <label>Ingrese un Lenguaje de Programacion:</label><br>
                <input id="elementoLenguaje"/><br>
                <button id=hijoBotonAdicion>Agregar</button><br>
                <p id="validador">${resultado}</p>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;

            // Agrega el event listener después de crear el botón
            setTimeout(() => {
                const btnAdd = document.getElementById("hijoBotonAdicion");
                if (btnAdd) btnAdd.addEventListener("click", adicionandoLenguaje);
            }, 0);

            break;
        case "btnD4":
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;
            break;
        case "btnD5":
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;
            break;
        case "btnD6":
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <label>Ingrese el primer numero</label>
                <input required id="primerNumero"/><br>
                <label>Ingrese el segundo numero</label>
                <input required id="segundoNumero"/><br>
                <label>Ingrese el tercer numero</label>
                <input required id="tercerNumero"/><br>
                <button id="hijoBotonPromedio">Calcular Promedio</button>
                <${etiquetaHTML} id="resultadoPromedio">${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;

            setTimeout(() => {
                const btnAdd = document.getElementById("hijoBotonPromedio");
                if (btnAdd) btnAdd.addEventListener("click", () => {

                    const num1 = document.getElementById("primerNumero").value;
                    const num2 = document.getElementById("segundoNumero").value;
                    const num3 = document.getElementById("tercerNumero").value;

                    let promedio = calcularPromedio(num1, num2, num3);
                    listaNumerica.push(num1, num2, num3);
                    let resultado = `Lista numerica : ${listaNumerica} y su promedio es ${promedio}`;
                    document.getElementById("resultadoPromedio").textContent = resultado;
                });

            });
            break;
        case "btnD7":
            dialog.innerHTML = `
                <h2>${titulo}</h2><br>
                <p>Lista de Numeros</p>
                <${etiquetaHTML} id="resultadoPromedio">[ ${resultado} ]</${etiquetaHTML}>
                <h2 id="resultadoMenorMayor"></h2><br>
                
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;

            calculandoMenorMayor(listaNumericaLlena);

            break;

        // ... agrega los demás casos hasta btnD11 ...
        default:
            dialog.innerHTML = `
                <label>${titulo}</label><br>
                <${etiquetaHTML}>${resultado}</${etiquetaHTML}>
                <button onclick="document.getElementById('dialog-model').close()">Cerrar</button>
            `;
            break;
    }

    dialog.showModal();
}


const dynBtn = document.querySelector("#dynamicBtn");
if (dynBtn) {
    dynBtn.setAttribute("onclick", "dialogGeneric('input', 'mensaje desde setAttribute', ' todabia no hay resultado')");
} else {
    console.warn("No existe el botón con id: dynamicBtn");
}


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
