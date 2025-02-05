// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para sortear.");
        return;
    }

    let sorteados = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * sorteados.length);
        } while (sorteados[index] === amigos[i]);

        resultado.push(`${amigos[i]} → ${sorteados[index]}`);
        sorteados.splice(index, 1);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = par;
        listaResultado.appendChild(item);
    });
}
