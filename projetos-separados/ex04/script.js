var modal = document.getElementById("myModal")
var span = document.getElementsByClassName("fechar")
var nenhuma = document.getElementById("nenhuma")
var texto = document.getElementById("itexto")
var todasNotas = document.getElementById("todasNotas")
var resultado = document.getElementById("resultado")
var num = 0

function myButton() {
    modal.style.display = "block"
}


function fechar() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}

function adicionarNota() {
    if(texto.value.trim().length == 0) {
        window.alert("Por favor, adicione um texto!")
        texto.focus()
    } else {
        nenhuma.innerHTML = ""
        num += 1
        let item = document.createElement("div")
        item.innerHTML = `<h3>Nota ${num}</h3>
        <p class="textoUnico">${texto.value}</p>
        <input type="button" value="Ver detalhes">`
        todasNotas.appendChild(item)
    }
}

todasNotas.addEventListener("click", function(e) {
    if (e.target.tagName === "INPUT") {
        const item1 = e.target.parentElement
        const p = item1.querySelector("p").innerHTML
        resultado.innerHTML = p
        myButton()
    }
}, false)