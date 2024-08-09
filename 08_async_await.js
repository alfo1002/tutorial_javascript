const API_URL = "https://api.thedogapi.com/v1/breeds?limit=7";

async function getRazas() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        //data.forEach(raza => console.log(raza.name));
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

async function obtenerDatos() {
    const razas = await getRazas();

    const element = document.getElementById("listrazas");

    razas.forEach(raza => {
        const li = document.createElement("li");
        li.textContent = raza.name;
        element.appendChild(li);
    });

}