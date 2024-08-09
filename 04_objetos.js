let persona = {
    nombre: "Manuel",
    edad: 35,
    saludar() {
        console.log(`Hola, soy el objeto: ${this.nombre}`)
    }
}

persona.saludar()