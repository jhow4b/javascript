const notifBox = document.querySelector(".notifBox")
const successMsg = "<span class='material-symbols-outlined'>Check_Circle</span> Enviado com sucesso!"
const errorMsg = "<span class='material-symbols-outlined'>Cancel</span> Por favor corrija o erro!"
const invalidMsg = "<span class='material-symbols-outlined'>Error</span> Input inválido, tente novamente!"

const showNotification = (msg) => {
    let notif = document.createElement("div")
    notif.classList.add("notificacao")
    notifBox.appendChild(notif)
    notif.innerHTML = `${msg}`

    if (msg.includes("sucesso")) {
        notif.classList.add("sucesso")
    }

    else if (msg.includes("erro")) {
        notif.classList.add("erro")
    }
    
    else if (msg.includes("inválido")) {
        notif.classList.add("invalido")
    }

    setInterval(() => {
        notif.remove()
    }, 5000);
}