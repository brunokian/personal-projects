const naruto = document.getElementById('naruto-image')
const sasuke = document.getElementById('sasuke-image')
const trofeu = document.getElementById('trofeu-duolingo-image')
let meioDoCampo = (window.innerWidth * 0.5) - 20
let fimDoCampo = window.innerWidth - 101
const startButton = document.getElementById('start-button')

naruto.style.marginLeft = '1px'
sasuke.style.marginLeft = `${fimDoCampo}px`
trofeu.style.marginLeft = `${meioDoCampo}px`

function startRunning() {
    naruto.style.marginLeft = parseInt(naruto.style.marginLeft) + Math.random()*20 + 'px'
    console.log(parseInt(naruto.style.marginLeft))
    sasuke.style.marginLeft = parseInt(sasuke.style.marginLeft) - Math.random()*20 + 'px'

    if(parseInt(naruto.style.marginLeft) > (window.innerWidth / 2) - 80) {
        alert ('NARUTO É O VERCEDOR!!!')
        resetGame()
    } 

    if(parseInt(sasuke.style.marginLeft) < (window.innerWidth / 2)) {
        alert ('SASUKE É O VENCEDOR!!!, mas continua sendo um personagem lixo')
        resetGame()
    }
}

function resetGame() {
    naruto.style.marginLeft = '1px'
    sasuke.style.marginLeft = `${fimDoCampo}px`
    clearInterval(run)
}

function running() {
    setInterval(startRunning, 50)
}
    
 

startButton.addEventListener('click',running)
// setInterval(startRunning, 500)

