document.body.addEventListener('keyup', (event) => {
    tocarAudio(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let input = document.querySelector('#input').value

    if (input !== '') {
        let array = input.split('')
        composicaoArray(array)
    }
})

function tocarAudio(tecla) {
    let audio = document.querySelector(`#s_${tecla}`)
    let key = document.querySelector(`div[data-key="${tecla}"]`)

    if (audio) {
        audio.currentTime = 0
        audio.play()
    }

    if (key) {
        key.classList.add('active')
        setTimeout(() => {
            key.classList.remove('active')
        }, 300)

    }
}

function composicaoArray(array) {
    let tempo = 0
    for (let itemComp of array) {
        setTimeout(() => {
            tocarAudio(`key${itemComp}`)
        }, tempo)

        tempo += 250
    }

    

}