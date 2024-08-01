const frases = [
    "Show me the Champion of Light",
    "I'll show you the Herald of Darkness" ,
    "Lost in a never ending night" ,
    "Diving deep to the surface",
    "And all your stories of crime and chilling thrillers",
    "of hardboiled killers became bestsellers",
    "It was all too much, I had to get away",
    "The story's the end all, a piece of true fiction",
    "Made meaningless in the face of creation",
    "Until I figure it out",
    "To bring this song to its end" 
]

const indexUsados = new Set()
const resultado = document.getElementById("resultado")

function gerarFrase() {
    if(indexUsados.size >= frases.length) {
        indexUsados.clear()
    }
     
    while (true) {
        const indexAleatorio = Math.floor(Math.random() * frases.length)

        if(indexUsados.has(indexAleatorio)) continue

        const frase = frases[indexAleatorio]
        resultado.innerHTML = `${frase}`
        indexUsados.add(indexAleatorio)
        break
    }

}