
let intervalID

const randomColour = () => {
    let hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let idx = Math.floor(Math.random() * 16)

        color += hex[idx]
    }

    return color;
}





document.getElementById("start").addEventListener('click', () => {
    intervalID = setInterval(
        changecolour, 1000
    )

    function changecolour() {
        document.body.style.backgroundColor = randomColour();

    }
}
)



document.getElementById("stop").addEventListener('click', () => {
    clearInterval(intervalID)
}
)