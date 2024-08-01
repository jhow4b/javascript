let relogio = document.getElementById("relogio")
let intervalo = null
let tempo = 0

function padStart(value) {
    return String(value).padStart(2, "0")
}

function definirTempo() {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    relogio.innerHTML = `${padStart(minutos)}:${padStart(segundos)}`
}

function temporizador() {
    tempo++
    definirTempo()
}

function iniciar() {
    if (intervalo) pausar()
    intervalo = setInterval(temporizador, 1000)
}

function pausar() {
    clearInterval(intervalo)
}

function resetar() {
    pausar()
    tempo = 0
    definirTempo()
}