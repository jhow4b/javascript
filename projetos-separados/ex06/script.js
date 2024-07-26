let texto = document.getElementById("itexto")

function checar(){ 
    let reverso = texto.value.trim().split("").reverse().join("")
    
    if (texto.value.length == 0) {
        window.alert("[ERRO] Digite alguma palavra")
    } else {
        if (texto.value.trim() == reverso) {
            window.alert("É um palíndromo")
        } else {
            window.alert("Não é um palíndromo")
        }
    }
}