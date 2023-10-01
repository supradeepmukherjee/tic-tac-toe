let bgm = new Audio('music.mp3')
let over = new Audio('gameover.mp3')
let click = new Audio('ting.mp3')
x = 'X'
gameover = false
// Function to change the trn
const changeturn = () => {
    return x === 'X' ? 'O' : 'X'
}
// Function to check for a win
checkwin = () => {
    boxtext = document.getElementsByClassName('boxtext')

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [0, 3, 6, -5, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [2, 4, 6, 5, 15, 135],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' won'
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // always write translate first then rotate
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = x
            x = changeturn()
            // click.play()
            checkwin()
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + x
            }
        }
    })
});

// reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    })
    gameover = false
    document.querySelector(".line").style.width = "0px";
    document.getElementsByClassName('info')[0].innerText = 'Turn for X'
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0'
})