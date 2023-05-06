const activityList = [
    "Hacer tarea",
    "Repasar",
    "Hacer ejercicio",
    "Leer",
    "Ver una película",
];

const container = document.getElementById("container");
debugger
console.log('container :-- ', container);
const list = document.createElement("ul");
console.log('list :>> ', list);
// // function crearLista () {
    for(let i= 0; i < activityList.length; i++){
        const item = document.createElement("li");
        item.textContent = activityList[i];
        list.appendChild(item);
    }
// // }

// crearLista();
container.appendChild(list);
console.log('container :>> ', container);