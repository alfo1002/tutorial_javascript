//funcion tradicional
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('DevGuardianCode'));

//funcion flecha
const saludarflecha = nombre => `Hola ${nombre} desde funcion flecha`;
console.log(saludarflecha('Ecuador'));