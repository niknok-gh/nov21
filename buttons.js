const no = document.getElementById('no')
const yes = document.getElementById('yes')

let scaleNo = 1
let scaleYes = 1
let noOffsetY
let noOffsetX
let yesOffsetY = 1
let yesOffsetX = 1

no.addEventListener('click', () => {
    scaleNo -= 0.1
    noOffsetY = generateRandomNumber(75, 150);
    noOffsetX = generateRandomNumber(75, 150);
    no.style.transform = 'scale('+scaleNo+') translateY('+noOffsetY+'px) translateX('+noOffsetX+'px)'

    scaleYes += 0.1
    yesOffsetY += 1.25
    yesOffsetX+= 3.25
    yes.style.transform = 'scale('+scaleYes+') translateY('+yesOffsetY+'px) translateX('+yesOffsetX+'px)'
})

yes.addEventListener('click', () => {
    window.location.href = 'yes.html'
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}