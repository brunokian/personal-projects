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
    naruto.style.marginLeft = parseInt(naruto.style.marginLeft) + Math.random()*50 + 'px'
    console.log(parseInt(naruto.style.marginLeft))

function resetGame() {
    naruto.style.marginLeft = '1px'
}

    if(parseInt(naruto.style.marginLeft) > (window.innerWidth / 2) - 30) {
        alert ('NARUTO É O VERCEDOR!!!')
        naruto.style.marginLeft = '1px'
    }
}

startButton.addEventListener('click', startRunning)

