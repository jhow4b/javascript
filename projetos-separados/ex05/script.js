function alterarCor(cor) {
    document.body.style.background = cor
}

function corAleatoria() {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    let cor = `rgb(${r}, ${g}, ${b})`
    console.log(cor)
    document.body.style.background = cor
}