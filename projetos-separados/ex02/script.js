let nome = document.getElementById("inome")
let data = document.getElementById("idata")
let valor = document.getElementById("ivalor")
let vazio = document.getElementById("vazio")
let tabela = document.getElementById("tabela")


function limparTabela() {
    if (tabela.rows.length == 2) {
        vazio.classList.remove("esconder")
    }
}


function adicionar() {
    if (nome.value.trim().length == 0 || data.value.trim().length == 0 || valor.value.trim().length == 0) {
        window.alert("[ERRO] Informações pendentes.")
    } else {
        vazio.classList.add("esconder")
        let linha = document.createElement("tr")
        let f = new Intl.NumberFormat("pt-br", {currency: "BRL", style: "currency"})
        linha.setAttribute("class", "linha")
        linha.innerHTML += `<td>${nome.value}</td><td>${data.value}</td><td>${f.format(valor.value)}</td><td><input type="button" value="X" onclick="deletar()"></td>`
        tabela.appendChild(linha)
        nome.value = ""
        data.value = ""
        valor.value = ""
        nome.focus()
    }
}

function deletar() {
    let linha = document.querySelector(".linha")
    tabela.removeChild(linha)
    limparTabela()
}