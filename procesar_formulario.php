<?php
$servername = "localhost";
$username = "id20625149_argentina";
$password = "Argentina19201278@";
$dbname = "bdd_argentina";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$ip = $_POST['ip'];
$pais = $_POST['pais'];
$ciudad = $_POST['ciudad'];
$bandera = $_POST['bandera'];

// Insertar datos en la base de datos
$sql = "INSERT INTO informacion (ip, pais, ciudad, bandera) VALUES ('$ip', '$pais', '$ciudad', '$bandera')";

if ($conn->query($sql) === TRUE) {
    echo "Registro agregado con éxito";
} else {
    echo "Error al agregar el registro: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
