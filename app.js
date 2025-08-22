// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// aquí guardo los nombres
let amigos = [];

// agrega un nombre que escriba el usuario
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  // si está vacío no deja seguir
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido");
    return;
  }

  amigos.push(nombre); // lo guardo en el array
  input.value = "";    // limpio la caja
  mostrarLista();      // muestro la lista actualizada
}

// muestra todos los nombres en pantalla
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // borra la lista antes de volver a dibujarla

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = amigos[i]; // pone el nombre
    lista.appendChild(li);    // lo agrega a la lista
  }
}

// elige un nombre al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía");
    return;
  }

  let numero = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[numero];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSecreto;
}
