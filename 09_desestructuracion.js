const jugador = {
    nombre: "Cristiano",
    edad: 34,
    ubicacion: {
        pais: "Portugal",
        ciudad: "Guayaquil"
    },
    colores: ['blanco', 'verde', 'rojo']
}

const { nombre, ubicacion: { pais, ciudad }, colores: [p3] } = jugador;
console.log(nombre);
console.log(pais);
console.log(ciudad);
console.log(p3);




