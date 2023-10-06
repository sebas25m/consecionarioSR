let select = window.localStorage.getItem('eleccion');
console.log("carro seleccionado: " + select);

// Selecciona el elemento img por su ID
const imgElement = document.getElementById("imagenBMW");
const nombre_vehiculo = document.getElementById('nombre-BMW');
const listaSlider = document.querySelector('#slider');

// Llamados a las listas del HTML
const lista_motor = document.getElementById("carac-motor");
const lista_transm = document.getElementById("carac-transm");
const lista_suspension = document.getElementById("carac-suspension");
const list_direccion = document.getElementById("carac-direct");
const list_freno = document.getElementById("carac-freno");
const list_dimension = document.getElementById("carac-dimension");
const list_performance = document.getElementById("carac-perfor");
const imagenCarrusel = document.getElementById("imagenCarrusel");
const precio = document.getElementById("precio");

// Contenido de las listas
const content_motor = [];
const content_transm = []
const content_suspension = [];
const content_direccion = [];
const content_frenos = [];
const content_dimension = [];
const content_performance = [];
const imagenes = [];

switch (select) {
    case "1": {
        // Cambia el atributo src con la URL de la imagen que deseas
        imgElement.src = "./images/bmw-modelo1.png";
        nombre_vehiculo.innerHTML = "BMW SERIE 3";
        // Se llenan las listas para mostrar la información
        content_motor.push("Motor delantero", "Motor intercooler 16 valvulas en linea", "4 cilindros bloque y cabeza de aluminio", "122 pulgadas cúbicas, 1998 cc");
        content_transm.push("Caja, dual - automatíca", "8 velocidades", "Esfuerzo de torsión: 295 lb");
        content_suspension.push("Suspension M sport", "Amortiguación firme", "Asistente de marcha atrás", "Puesto de conducción orientado al conductor");
        content_direccion.push("Dirección activa", "Cremallera con asistencia eléctrica", "Comodidad de conducción, precisión y seguridads.");
        content_frenos.push("Frenos traseros: Disco ventilado", "Frenos delanteros: Disco ventilado");
        content_dimension.push("Tipo de carroceria: berlina", "Largo: 4.633mm", "Ancho: 1.811 mm", "Peso: 1.705 kg", "Carga máxima: 2.180 kg", "Capacidad de depósito: 57 litros");
        content_performance.push("Aceleración de 0 a 100 km/h: 4,8 segundos", "Potencia: 313 CV a 4.400 rpm", "Potencia específica: 9,6 CV/L", "Velocidad maxima: 250km/h")
        // Llena la lista de caracteristicas del motor
        content_motor.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_motor.appendChild(li);
        });

        // Llena la lista de Transmisión
        content_transm.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_transm.appendChild(li);
        });
        // LLena la lista de caracteristicas de la suspensión
        content_suspension.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_motor.appendChild(li);
        })
        content_dimension.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_dimension.appendChild(li);
        })
        content_direccion.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_direccion.appendChild(li);
        })
        content_frenos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_freno.appendChild(li);
        })
        content_performance.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_performance.appendChild(li);
        })

        precio.innerHTML = "$220.000.000"
        // mostrar carrusel
        imagenes.push("./images/bmwcarrusel1.jpg", "./images/bmwcarrusel2.jpeg", "./images/bmwcarrusel3.jpeg");
        let currentIndex = 0;

        function cambiarImagen(indice) {
            if (indice >= 0 && indice <= imagenes.length) {
                imagenCarrusel.src = imagenes[indice - 1];
                imagenCarrusel.alt = `Imagen ${indice}`;
            }
        }

        function avanzarAutomaticamente() {
            currentIndex++;
            if (currentIndex >= imagenes.length) {
                currentIndex = 0;
            }
            cambiarImagen(currentIndex + 1);
        }

        // Cambio automático de imágenes cada 5 segundos (5000 ms)
        setInterval(avanzarAutomaticamente, 5000);
        break;
    }
    case "2": {
        imgElement.src = "./images/bmw-modelo2.png";
        nombre_vehiculo.innerHTML = "BMW Z4";
        imgElement.style.width = "35vw";

        content_motor.push("Motor delantero", "Motor intercooler 16 valvulas en linea", "4 cilindros bloque y cabeza de aluminio", "122 pulgadas cúbicas, 1998 cc");
        content_transm.push("Caja, dual - automatíca", "8 velocidades", "Esfuerzo de torsión: 295 lb");
        content_suspension.push("Suspension M sport", "Amortiguación firme", "Asistente de marcha atrás", "Puesto de conducción orientado al conductor");
        content_direccion.push("Dirección activa", "Cremallera con asistencia eléctrica", "Comodidad de conducción, precisión y seguridads.");
        content_frenos.push("Frenos traseros: Disco ventilado", "Frenos delanteros: Disco ventilado");
        content_dimension.push("Tipo de carroceria: berlina", "Largo: 4.633mm", "Ancho: 1.811 mm", "Peso: 1.705 kg", "Carga máxima: 2.180 kg", "Capacidad de depósito: 57 litros");
        content_performance.push("Aceleración de 0 a 100 km/h: 4,8 segundos", "Potencia: 313 CV a 4.400 rpm", "Potencia específica: 9,6 CV/L", "Velocidad maxima: 250km/h");

        // Llena la lista de caracteristicas del motor
        content_motor.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_motor.appendChild(li);
        });

        // Llena la lista de Transmisión
        content_transm.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_transm.appendChild(li);
        });
        // LLena la lista de caracteristicas de la suspensión
        content_suspension.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista_motor.appendChild(li);
        })
        content_dimension.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_dimension.appendChild(li);
        })
        content_direccion.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_direccion.appendChild(li);
        })
        content_frenos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_freno.appendChild(li);
        })
        content_performance.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list_performance.appendChild(li);
        })

        precio.innerHTML = "$262.000.000";

        // mostrar carrusel
        imagenes.push("./images/BMW-Z4.jpg", "./images/carruselz4.jpeg", "./images/carruselz43.jpeg");
        let currentIndex = 0;

        function cambiarImagen(indice) {
            if (indice >= 0 && indice <= imagenes.length) {
                imagenCarrusel.src = imagenes[indice - 1];
                imagenCarrusel.alt = `Imagen ${indice}`;
            }
        }

        function avanzarAutomaticamente() {
            currentIndex++;
            if (currentIndex >= imagenes.length) {
                currentIndex = 0;
            }
            cambiarImagen(currentIndex + 1);
        }
        // Cambio automático de imágenes cada 5 segundos (5000 ms)
        setInterval(avanzarAutomaticamente, 5000);


        break;

    }
    case "3": {
        
    }
    // Agrega más casos para otros valores de "select" si es necesario
    default: {
        nombre_vehiculo.innerHTML = "No se encontro ningún resultado.";
        // Código para manejar otros valores de "select"
    }
}

function cambiar_page() {
    window.location.assign("carrocomp.html");
}