class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getPersona() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }

}

let persona = new Persona("DevGuardianCode", 28);
console.log(persona.getPersona());


class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    getEstudiante() {
        return `Estudiante: ${this.nombre} -- Curso: ${this.curso}`;
    }
}

let carlos = new Estudiante("Carlos", 35, "JavaScript");
console.log(carlos.getEstudiante());


/* const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    const crd = pos.coords;

    console.log("Tu ubicación actual es:");
    console.log(`Latitud : ${crd.latitude}`);
    console.log(`Longitud: ${crd.longitude}`);
    console.log(`Más o menos ${crd.accuracy} metros.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


navigator.geolocation.getCurrentPosition(success, error, options); */