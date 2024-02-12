// Ingresar dos números mediante un prompt y almacenar sus valores en dos variables distintas
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Realizar una resta entre los dos valores
var resultadoResta = numero1 - numero2;

// Obtener el contenedor para mostrar los mensajes
var mensajeContainer = document.getElementById("mensajeContainer");

// Verificar si el resultado es mayor a 0
if (resultadoResta > 0) {
    // Mostrar mensaje en la página
    mensajeContainer.innerHTML = "El resultado de la resta es: " + resultadoResta + "<br>Es mayor a 0.";

    // Comparar si el número es par o impar
    if (resultadoResta % 2 === 0) {
        mensajeContainer.innerHTML += "<br>Es par.";
    } else {
        mensajeContainer.innerHTML += "<br>Es impar.";
    }
} else if (resultadoResta <= 0) {
    // Mostrar mensaje en la página
    mensajeContainer.innerHTML = "El resultado de la resta es: " + resultadoResta + "<br>Es menor o igual a 0.";
}
