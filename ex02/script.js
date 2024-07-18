function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = window.document.getElementById('txtano')
    var resultado = window.document.getElementById('resultado')

    if (formularioAno.value.length == 0 | formularioAno.value > ano | formularioAno.value < 1900) {
        window.alert("[ERRO] Digite o ano novamente")
    } else {
        var fsex = document.getElementsByName("radsex")    
        var idade = ano - Number(formularioAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute("src", "imagens/bebe-m.png")
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute("src", "imagens/jovem-m.png")
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "imagens/adulto-m.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "imagens/idoso-m.png")
            }
        } 
        else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute("src", "imagens/bebe-f.png")
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute("src", "imagens/jovem-f.png")
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "imagens/adulto-f.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "imagens/idoso-f.png")
            }   
        }

        resultado.style.textAlign = "Center"
        resultado.innerHTML = `Detectamos ${genero} de idade ${idade}`
        resultado.appendChild(img)
    }
}