// Mensaje de bienvenida en la consola
console.log("¡Bienvenido!");

// Verificar si está unido el script
console.log("Script cargado correctamente.");

// Obtener referencias a los elementos HTML
let idElemento = document.getElementById('ip');
let nombrePaisElemento = document.getElementById('pais');
let nombreElemento = document.getElementById('ciudad');
let edadElemento = document.getElementById('bandera');

// Hacer una petición a la API al cargar la página
const solicitudAPI = () => {
  // Asigna la función al evento load del objeto window
  axios
    .get('https://iot-fcg-01.000webhostapp.com/php-examen-api/index.php')
    .then(function (response) {
      // Manejar respuesta exitosa
      console.log(response.data);

      // Actualizar los elementos HTML con la información obtenida
      idElemento.value = response.data.id;
      nombrePaisElemento.value = response.data.nombre_pais;
      nombreElemento.value = response.data.nombre;
      edadElemento.value = response.data.edad;
    })
    .catch(function (error) {
      // Manejar error
      console.log(error);
    });
};

// Llama al evento load cada vez que se refresca o actualiza la página
// Y llama a la función solicitudAPI que tiene la rutina 
// de llamar a la API desde axios 
window.addEventListener('load', solicitudAPI);
