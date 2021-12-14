
let año = 2021;
let sumaAño = año + 5;

// ENTRADA
let nombreCompleto = prompt("Por favor, ingresa tu nombre completo");
let edad = prompt("Por favor, ingresa tu edad");
let ocupacion = prompt("A qué te dedicas?: Soy...");


// CONSOLA
console.log("El usuario " + nombreCompleto + " ingresó al desafio JavaScript");
console.log("Datos de " + nombreCompleto + ": Edad: " + edad + " / Ocupacion: " + ocupacion);

// SALUDO
let mensajeAlert = "Hola " + nombreCompleto + "!" + " Bienvenido/a. Este es mi primer desafío de JavaScript.";
let mensajeAlert2 = "A sí que tenés " + edad + " años, y sos " + ocupacion + " ... un placer conocerte!";
let mensajeAlert3 = "Dentro de 5 años vamos a estar en el " + sumaAño + ". Donde planeas estar en ese momento?";
alert(mensajeAlert);
alert(mensajeAlert2);
alert(mensajeAlert3);

// ENTRADA
let futuro = prompt("De momento tengo planeado ");

// CONSOLA
console.log("Sus planes para los proximos 5 años son: " + futuro);

// SALIDA
let mensajeAlert4 = "De verdad? Me parece una excelente idea!"
alert(mensajeAlert4);

// ENTRADA
let mensajeUsuario = prompt("Antes de despedirnos, querés decirme algo?:");

// CONSOLA
console.log(nombreCompleto + " indicó éstas palabras: " + mensajeUsuario);

// SALIDA
let mensajeAlert5 = "Muchas gracias por esas palabras, las voy a tomar muy en cuenta!";
alert(mensajeAlert5);


// DESPEDIDA
let despedida = "Ok " + nombreCompleto + ", eso fue todo por hoy, gracias por interactuar con este desafio. Hasta la próxima!";
alert(despedida);


