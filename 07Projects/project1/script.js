const button = document.querySelectorAll(".button")
// console.log(button);
const bg = document.querySelector("body")

button.forEach(function (but) {
    but.addEventListener('click', function (e) {
        // console.log(e)
        switch (e.target.id) {
            case "green":
                bg.style.backgroundColor = "green"
                break;
            case "yellow":
                bg.style.backgroundColor = "yellow"
                break;
            case "red":
                bg.style.backgroundColor = "red"
                break;
            case "blue":
                bg.style.backgroundColor = "blue"
                break;



        }
    })

})
