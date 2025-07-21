// Ejemplo if...else
function verificarEdad() {
  const edad = prompt("Ingrese su edad:");
  if (edad >= 18) {
    alert("Eres mayor de edad.");
  } else {
    alert("Eres menor de edad.");
  }
}

// Ejemplo switch
function elegirFruta() {
  const fruta = prompt("Elige una fruta: manzana, banana, fresa");
  switch (fruta.toLowerCase()) {
    case "manzana":
      alert("Las manzanas son rojas.");
      break;
    case "banana":
      alert("Las bananas son amarillas.");
      break;
    case "fresa":
      alert("Las fresas son dulces.");
      break;
    default:
      alert("Fruta no reconocida.");
  }
}

// Ejemplo try...catch...throw
function manejarError() {
  try {
    const numero = parseInt(prompt("Ingrese un número positivo:"));
    if (isNaN(numero)) throw "Debe ingresar un número válido.";
    if (numero < 0) throw "No se permiten números negativos.";
    alert("Número ingresado: " + numero);
  } catch (error) {
    alert("Error: " + error);
  }
}
// Ejemplo for
function ejemploFor() {
  let resultado = "";
  for (let i = 1; i <= 5; i++) {
    resultado += "Número: " + i + "\n";
  }
  alert(resultado);
}

// Ejemplo while
function ejemploWhile() {
  let i = 1;
  let resultado = "";
  while (i <= 5) {
    resultado += "Iteración: " + i + "\n";
    i++;
  }
  alert(resultado);
}

// Ejemplo do...while
function ejemploDoWhile() {
  let i = 1;
  let resultado = "";
  do {
    resultado += "Contador: " + i + "\n";
    i++;
  } while (i <= 5);
  alert(resultado);
}

// Ejemplo forEach
function ejemploForEach() {
  const frutas = ["Manzana", "Banana", "Fresa"];
  let resultado = "";
  frutas.forEach(function(fruta, index) {
    resultado += `Fruta ${index + 1}: ${fruta}\n`;
  });
  alert(resultado);
}
// FUNCIONES EN JAVASCRIPT

// 1. Función Declarada
// Se define con la palabra clave 'function' y tiene nombre.
// Puede ser llamada antes o después de su declaración.
function funcionDeclarada() {
  alert("¡Esta es una función declarada!");
}

// 2. Función Expresada
// Se guarda dentro de una constante o variable.
// Solo puede ser llamada después de su definición.
const funcionExpresada = function () {
  alert("¡Esta es una función expresada!");
};

// 3. Función Flecha
// Sintaxis más corta para funciones anónimas.
// Muy usada en funciones modernas.
const funcionFlecha = () => {
  alert("¡Esta es una función flecha!");
};

// 4. Función Anónima
// No tiene nombre y se usa comúnmente dentro de métodos como setTimeout o eventos.
// Aquí se usa dentro de setTimeout como ejemplo.
function funcionAnonima() {
  setTimeout(function () {
    alert("¡Esta es una función anónima dentro de un setTimeout!");
  }, 500); // Espera 500 milisegundos (0.5 segundos) antes de mostrar el mensaje
}
// arreglo.js

// Paso 1: Definir el arreglo
let frutas = ["Manzana", "Banano", "Pera", "Mango", "Sandía"];

// Paso 2: Obtener el contenedor <ul> desde el HTML
let lista = document.getElementById("listaFrutas");

// Paso 3: Recorrer el arreglo y agregar cada fruta como <li>
frutas.forEach(function(fruta) {
    let item = document.createElement("li"); // Crea un elemento <li>
    item.textContent = fruta;                // Le asigna el nombre de la fruta
    lista.appendChild(item);                 // Lo agrega a la lista <ul>
});
// objeto.js

// Paso 1: Crear el objeto con propiedades
let estudiante = {
    nombre: "Roberto Urbina",
    edad: 21,
    carrera: "Ingeniería del Software"
};

// Paso 2: Obtener el contenedor desde el HTML
let info = document.getElementById("infoEstudiante");

// Paso 3: Mostrar los datos
info.innerHTML = `
    <p><strong>Nombre:</strong> ${estudiante.nombre}</p>
    <p><strong>Edad:</strong> ${estudiante.edad}</p>
    <p><strong>Carrera:</strong> ${estudiante.carrera}</p>
`;
// funcion.js

function mostrarMensaje(mensaje) {
    // Obtener el contenedor
    let contenedor = document.getElementById("mensajeFuncion");
    
    // Mostrar el mensaje recibido
    contenedor.textContent = mensaje;
}

// Llamada de ejemplo
mostrarMensaje("Hola, este mensaje fue enviado como parámetro a la función.");

// funcionRetorno.js

function obtenerSaludo() {
    return "Hola, este mensaje fue retornado por una función.";
}

// Capturar el valor retornado
let mensajeRetornado = obtenerSaludo();

// Mostrar en el HTML
document.getElementById("mensajeRetorno").textContent = mensajeRetornado;

// eventoHover.js

const texto = document.getElementById("textoHover");

texto.addEventListener("mouseover", function() {
  texto.style.color = "green";
  texto.style.fontSize = "24px";
  texto.style.fontStyle = "italic";
});

texto.addEventListener("mouseout", function() {
  texto.style.color = "black";
  texto.style.fontSize = "16px";
  texto.style.fontStyle = "normal";
});

// eventoOnChange.js

const selectFruta = document.getElementById("frutaSelect");
const mensaje1 = document.getElementById("mensajeFruta");

selectFruta.addEventListener("change", function () {
  if (selectFruta.value !== "") {
    mensaje1.textContent = `Has seleccionado: ${selectFruta.value}`;
  } else {
    mensaje.textContent = "";
  }
});
// eventoOnKeydown.js

const campoTexto = document.getElementById("teclaInput");
const mensaje = document.getElementById("mensajeTecla");

campoTexto.addEventListener("keydown", function (evento) {
  mensaje.textContent = `Tecla presionada: ${evento.key}`;
});


const imagen = document.getElementById("imagenHover");
const mensajeHover = document.getElementById("mensajeHover");

// Evento cuando el mouse entra
imagen.addEventListener("mouseover", function () {
  mensajeHover.textContent = "Estás viendo una zanahoria orgánica 😊";
});

// Evento cuando el mouse sale
imagen.addEventListener("mouseout", function () {
  mensajeHover.textContent = "";
});

// eventoClickMostrarImagen.js

// Obtener referencias del botón y el div donde se mostrará la imagen
const botonMostrar = document.getElementById("mostrarImagenBtn");
const contenedor = document.getElementById("contenedorImagen");

// Agregar evento click al botón
botonMostrar.addEventListener("click", function () {
    // Crear una nueva imagen
    const imagen = document.createElement("img");

    // Asignar la ruta de la imagen (asegúrate de tenerla en la carpeta correcta)
    imagen.src = "img/zanahoria.png"; // cambia el nombre según el archivo real

    // Agregar estilos con JavaScript
    imagen.style.width = "300px";
    imagen.style.border = "4px solid green";
    imagen.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
    imagen.style.borderRadius = "10px";
    imagen.alt = "Imagen de Zanahoria";

    // Limpiar el contenedor antes (por si ya hay una imagen)
    contenedor.innerHTML = "";

    // Insertar la imagen en el contenedor
    contenedor.appendChild(imagen);
});
