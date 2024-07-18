function carregar() {
    var texto = window.document.getElementById('texto')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 18 //data.getHours()

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha.png'
        texto.innerHTML = `Agora são ${hora} horas da manhã.`
        document.body.style.background = '#3bace9'
    }
    else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/tarde.png'
        texto.innerHTML = `Agoa são ${hora} horas da tarde.`
        document.body.style.background = '#e3a76c'
    }
    else {
        imagem.src = 'imagens/noite.png'
        texto.innerHTML = `Agora são ${hora} horas da noite.`
        document.body.style.background = '#161c28'
    }
}