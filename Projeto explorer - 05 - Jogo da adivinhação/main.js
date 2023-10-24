const screenOne = document.querySelector(".screen1")
const screenTwo = document.querySelector(".screen2")
let buttonTry = document.querySelector(".btn-try")
let buttonAgain = document.querySelector(".btn-again")

let randomNumber = Math.round(Math.random()*10)
let attemptsNumber = 1

console.log(randomNumber)
//Eventos
buttonTry.addEventListener('click', handleClick)
buttonAgain.addEventListener('click', playAgain)
document.addEventListener('keydown',function(e) {
    if(e.key == 'Enter' && screenOne.classList.contains('hide')){
      playAgain(event)
    }
})

//Funções
function handleClick(event) {
event.preventDefault()

const inputNumber = document.querySelector("#input-number")
const attempts = document.querySelector("#tentativas")

if(Number(inputNumber.value) == randomNumber){
    screenOne.classList.add('hide')
    screenTwo.classList.remove('hide')

    attempts.innerHTML = attemptsNumber
}
inputNumber.value = ""
attemptsNumber++
}

function playAgain(event){
event.preventDefault()

screenOne.classList.remove('hide')
screenTwo.classList.add('hide')

attemptsNumber = 1

randomNumber = Math.round(Math.random()*10)
console.log(randomNumber)
}

