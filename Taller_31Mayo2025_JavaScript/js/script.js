console.log("Práctica de JavaScript");


let nombre = "Ana"
console.log("Bienvenida, " + nombre)


let nombre2 = "Rebeca"
document.getElementById("mensaje").innerText = "Hola, "+ nombre2



const PI = 3.1416
let radio = 5
let area = PI * radio * radio
document.getElementById("area").innerText = "Área del Círculo = " + area



let persona = {
    nombre : "Laura",
    edad : 28,
    ciudad : "Guayaquil"
}
// console.log("Nombre:",persona.nombre)
document.getElementById("informacion").innerHTML = `
    <p><strong> Nombre:</strong> ${persona.nombre}</p>
    <p><strong> Edad:</strong> ${persona.edad}</p>
    <p><strong> Ciudad:</strong> ${persona.ciudad}</p>
`


let colores = ["Rojo" , "Verde" , "Azul"]
let lista = document.getElementById("lista-colores")
for (let i = 0 ; i < colores.length ; i++){
    let item = document.createElement("li")
    item.innerText = colores[i]
    lista.appendChild(item)
}