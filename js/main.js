// alert("Hola mundo");
// dar un mensaje al usuario que está utilizando la página
console.log("¡Bienvenido!");

// Verificar si está unido el script
console.log("Script cargado correctamente.");

// Obtener referencias a los elementos HTML
let nombreElemento = document.getElementById('Pais');
let edadElemento = document.getElementById('Zona');

// Hacer una petición para un usuario con ID específico
const solicitudAPI = () => {
  // Asigna la función al evento load del objeto window
  axios
    .get('https://iot-fcg-01.000webhostapp.com/php-examen-api/index.php')
    .then(function (response) {
      // Manejar respuesta exitosa
      console.log(response.data);

      // Actualizar los elementos HTML con la información obtenida
      nombreElemento.innerHTML = response.data.Pais;
      edadElemento.innerHTML = response.data.Zona;
    

    })
    .catch(function (error) {
      // Manejar error
      console.log(error);
    })
    .finally(function () {
      // Siempre se ejecutará
    });
};

// Llama al evento load cada vez que se refresca o actualiza la página
// Y llama a la función solicitudAPI que tiene la rutina 
// de llamar a la API desde axios 
window.addEventListener('load', solicitudAPI);
