var fazer = document.getElementById("fazer")
var resultado = document.getElementById("resultado")
var lista = document.getElementById("lista")

function adicionar() {
    if (fazer.value.length === 0) {
        window.alert("[ERRO] Digite um item para adicionar!")
        fazer.focus()
    } else {
        var item = document.createElement("li")
        item.setAttribute("class", "itens")
        item.innerHTML += `${fazer.value} <input type="button" value="X"> <input type="checkbox"/>`
        lista.appendChild(item)

        fazer.value = ""
        fazer.focus()
    }
}

lista.addEventListener("click", function(e){
    if (e.target.tagName === "INPUT") {
        e.target.parentElement.remove()
    }
}, false)

function limparLista() {
    lista.innerHTML = ""
}

