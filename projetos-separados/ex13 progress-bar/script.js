//PROGRESS BAR 1
// const progress = document.querySelector(".progress")
// const loading = document.querySelector(".loading")

// const fakeIntervalLoad = [0, 10, 20, 25, 43, 52, 69, 75, 82, 90, 100]
// let i = 0

// const interval = setInterval(() => {
//     progress.style.width = `${fakeIntervalLoad[i]}%`
//     i++
//     loading.innerHTML = `Loading... ${fakeIntervalLoad[i]}%`
//     if (i == fakeIntervalLoad.length) {
//         clearInterval(interval)
//         loading.innerHTML = "Finalizado!"
//     }
// }, 1000)


const circle = document.querySelector(".progress-circle")
const loading = document.querySelector(".loading")
const fakeIntervalLoad = [0, 10, 25, 43, 52, 69, 75, 82, 90, 100]
const circumference = circle.getTotalLength()
let i = 0

const interval = setInterval(() => {
    circle.style.strokeDashoffset = circumference - (fakeIntervalLoad[i] / 100) * circumference
    i++
    loading.innerHTML = fakeIntervalLoad[i] + "%"
    
    if (i == fakeIntervalLoad.length) {
        clearInterval(interval)
        loading.innerHTML = "Ok"
    }
},1000)
