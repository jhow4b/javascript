let texto = document.getElementById("itexto")

function detectarVogal(str) {
    var count = String(str).match(/[aeiou]/gi)
    return count === null ? 0 : count.length
}

function verificar() {
    var resultado = detectarVogal(texto.value)
    window.alert(`Detectamos ${resultado} vogais!`)
}