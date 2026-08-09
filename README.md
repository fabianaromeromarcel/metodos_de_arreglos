Todo List — Métodos de Arreglos

Aplicación web de lista de tareas desarrollada con HTML, CSS y JavaScript. El proyecto permite agregar, visualizar, completar y eliminar tareas, utilizando diferentes métodos de arreglos de JavaScript.

Funcionalidades

* Mostrar tareas previamente registradas al cargar la página.
* Agregar nuevas tareas.
* Generar un ID para cada nueva tarea.
* Marcar tareas como realizadas mediante un checkbox.
* Eliminar tareas.
* Mostrar el total de tareas.
* Mostrar la cantidad de tareas realizadas.
* Actualizar automáticamente la información al modificar la lista.
* Diseño responsive para pantallas pequeñas.

Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript

Métodos de arreglos utilizados

El proyecto utiliza distintos métodos de arreglos para gestionar las tareas:

* push() — agrega una nueva tarea al arreglo.
* find() — busca una tarea por su ID.
* findIndex() — obtiene la posición de una tarea para poder eliminarla.
* filter() — obtiene las tareas realizadas para actualizar el contador.
* splice() — elimina una tarea del arreglo.

También se utilizan:

* for...of para recorrer las tareas.
* Math.random() para generar IDs aleatorios.
* Template literals para generar dinámicamente el contenido HTML.

Estructura del proyecto

desafio-metodos_de_arreglos/
│
├── index.html
│
└── assets/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js

Funcionamiento

Las tareas se almacenan inicialmente en un arreglo de objetos:

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

Cada tarea contiene:

* id: identificador de la tarea.
* descripcion: texto de la tarea.
* realizada: indica si la tarea está completada.

Cuando se agrega una nueva tarea, esta se incorpora al arreglo mediante push(). La función mostrarTareas() vuelve a renderizar la lista y actualiza los contadores.

Objetivo

El objetivo del proyecto es practicar el manejo de arreglos en JavaScript y aplicar sus principales métodos en una funcionalidad interactiva, utilizando el DOM para mostrar y actualizar la información en la página.

Proyecto desplegado
https://fabianaromeromarcel.github.io/metodos_de_arreglos/
