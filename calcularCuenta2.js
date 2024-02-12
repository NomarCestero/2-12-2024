// Obtener las cantidades de comida y bebida mediante prompts
const cantidadComida = parseFloat(prompt("Ingrese el monto de comida:")) || 0;
const cantidadBebida = parseFloat(prompt("Ingrese el monto de bebida:")) || 0;

// Calcular el total de comida y bebida
const totalComida = cantidadComida;
const totalBebida = cantidadBebida;

// Calcular el total completo de la cena sin propina
const totalCenaSinPropina = totalComida + totalBebida;

// Calcular el monto de la propina (15% del total sin propina)
const propina = 0.15 * totalCenaSinPropina;

// Calcular el total completo de la cena con propina
const totalCenaConPropina = totalCenaSinPropina + propina;

// Mostrar resultados en la página HTML
document.getElementById('totalComida').innerText = "Total de comida: $" + totalComida;
document.getElementById('totalBebida').innerText = "Total de bebida: $" + totalBebida;
document.getElementById('totalCenaSinPropina').innerText = "Total cena sin propina: $" + totalCenaSinPropina;
document.getElementById('propina').innerText = "Propina (15%): $" + propina;
document.getElementById('totalCenaConPropina').innerText = "Total cena con propina: $" + totalCenaConPropina;
