const inputTarea = document.querySelector("#NuevaTarea")
const botonAgregar = document.querySelector("#AgregarTarea")
const gestionarTareas = document.querySelector("#GestionDeTareas")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

const tareas = [
    {
        id: 12,
        descripcion: "Comprar pan",
        realizada: false
    },
    {
        id: 35,
        descripcion: "Estudiar JavaScript",
        realizada: false
    },
    {
        id: 78,
        descripcion: "Ordenar la pieza",
        realizada: true
    }
]

botonAgregar.addEventListener("click", () => {

    if (inputTarea.value.trim() === "") {
        return
    }

    const nuevaTarea = {
        id: Math.floor(Math.random() * 90) + 10,
        descripcion: inputTarea.value,
        realizada: false
    }

    tareas.push(nuevaTarea)
    inputTarea.value = ""

    mostrarTareas()
})

function mostrarTareas() {

    let html = ""

    for (let tarea of tareas) {

        html += `
            <div id="gtarea">
                <div class="id">${tarea.id}</div>

                <div class="descripcion">
                    ${tarea.descripcion}
                </div>

                <input
                    type="checkbox"
                    onchange="cambiarEstado(${tarea.id})"
                    ${tarea.realizada ? "checked" : ""}
                >

                <button onclick="eliminarTarea(${tarea.id})">
                    X
                </button>
            </div>
        `
    }

    gestionarTareas.innerHTML = html

    actualizarContadores()
}

function cambiarEstado(id) {

    const tareaEncontrada = tareas.find(
        tarea => tarea.id === id
    )

    tareaEncontrada.realizada = !tareaEncontrada.realizada

    mostrarTareas()
}

function eliminarTarea(id) {

    const indice = tareas.findIndex(
        tarea => tarea.id === id
    )

    tareas.splice(indice, 1)

    mostrarTareas()
}

function actualizarContadores() {

    const cantidadRealizadas = tareas.filter(
        tarea => tarea.realizada === true
    ).length

    totalTareas.innerHTML = tareas.length

    tareasRealizadas.innerHTML = cantidadRealizadas
}

mostrarTareas()