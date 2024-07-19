let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumber(n) { // Verifica se o número está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // Verifica se o número existe na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() { // Adiciona os valores
    if (isNumber(num.value) && !inLista(num.value, valores)) { // Verifica se o Número é valido e se NÂO está na lista
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = "" // Remove a visualização dos resultados
    } else {
        window.alert("[ERRO] Número inválido ou já cadastrado!")
    }
    num.value = "" // Limpa a caixa de digitação
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("[ERRO] Adicione valores antes de finalizar!")
    } else {
        let total = valores.length // Verifica o tamanho do array
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            if (valores[pos] > maior) { // Verifica o maior valor
                maior = valores[pos]
            }

            if (valores[pos] < menor) { // Verifica o menor valor
                menor = valores[pos]
            }

            soma += valores[pos] // Soma os valores
            media = soma / total // Calcula a média
        }

        // Adiciona os elementos na tela

        res.innerHTML = `<p>Ao todo, temos ${total} itens cadastrados</p>`
        res.innerHTML += `<p>O maior valor entre eles é o ${maior}</p>`
        res.innerHTML += `<p>O menor valor entre eles é o ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é ${media}</p>`
    }
}