const apiUrl = "https://api.thedogapi.com/v1/breeds";

fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.map(raza => console.log(raza.name));
    })
    .catch(error => {
        console.log("Error presentado: ", error);
    })