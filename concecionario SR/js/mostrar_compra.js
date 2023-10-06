const nombre_carro = document.getElementById("name_car");
const precio = document.getElementById("precio");
const eleccion = window.localStorage.getItem("eleccion");
const imgSelect = document.getElementById("select-car");

switch (eleccion) {
    case "1": {
        nombre_carro.innerHTML = "BMW serie 3";
        precio.innerHTML = "$220.000.000";
        imgSelect.src = "./images/bmw-modelo1.png";
    }
    case "2": {
        nombre_carro.innerHTML = "BMW z4";
        precio.innerHTML = "$262.000.000";
        imgSelect = "./images/bmw-modelo2.png";
    }
}