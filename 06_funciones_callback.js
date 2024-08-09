function saludar() {
    nombre = "Hola desde JavaScript";
    console.log(`Hola: ${nombre}`);
}

//setTimeout(saludar, 3000);


// Función para obtener razas de perros desde la API de The Dog API
async function obtenerRazasDePerros() {
    console.log('Estado de la promesa: pending');

    try {
        // Hacemos una solicitud HTTP GET a la API pública de The Dog API
        const response = await fetch('https://api.thedogapi.com/v1/breeds');

        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener las razas de perros: ${response.status} ${response.statusText}`);
        }

        // Convertimos la respuesta a formato JSON
        const data = await response.json();

        // Simulamos un retraso de 3 segundos
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Estado de la promesa: fulfilled');

        return data;
    } catch (error) {
        console.log('Estado de la promesa: rejected');
        throw error;
    }
}

// Consumimos la promesa y procesamos los datos
obtenerRazasDePerros()
    .then(razas => {
        // Mostramos la lista completa de razas en la consola
        console.log('Lista de razas de perros:', razas);

        // Usamos map para transformar la lista de razas en una lista de nombres
        const nombresDeRazas = razas.map(raza => raza.name);

        // Mostramos la lista de nombres de razas en la consola
        console.log('Nombres de razas:', nombresDeRazas);
    })
    .catch(error => {
        // Manejo de errores: mostramos el mensaje de error en la consola
        console.error('Hubo un problema con la solicitud:', error);
    });