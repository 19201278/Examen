// alert("Hola mundo");
// dar un mensaje al usuario que está utilizando la página
console.log("¡Bienvenido!");

// Verificar si está unido el script
console.log("Script cargado correctamente.");

// Obtener referencias a los elementos HTML
let nombreElemento = document.getElementById('nombre');
let edadElemento = document.getElementById('edad');
let paisElemento = document.getElementById('pais');

// Hacer una petición para un usuario con ID específico
const solicitudAPI = () => {
  // Asigna la función al evento load del objeto window
  axios
    .get('https://tu-api-que-retorna-informacion-del-usuario.com')
    .then(function (response) {
      // Manejar respuesta exitosa
      console.log(response.data);

      // Actualizar los elementos HTML con la información obtenida
      nombreElemento.innerHTML = response.data.nombre;
      edadElemento.innerHTML = response.data.edad;
      paisElemento.innerHTML = response.data.pais;

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