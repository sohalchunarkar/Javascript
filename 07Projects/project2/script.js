const metricBtn = document.getElementById("metricToggle");
const imperialBtn = document.getElementById("imperialToggle");

const metricInputs = document.querySelectorAll(".input-group");
const imperialInputs = document.querySelectorAll(".input-group2");


metricBtn.addEventListener("click", function () {

    metricBtn.classList.add("active");
    imperialBtn.classList.remove("active");

    metricInputs.forEach(el => el.style.display = "flex");
    imperialInputs.forEach(el => el.style.display = "none");



});


imperialBtn.addEventListener("click", function () {

    imperialBtn.classList.add("active");
    metricBtn.classList.remove("active");


    metricInputs.forEach(el => el.style.display = "none");
    imperialInputs.forEach(el => el.style.display = "flex");


});


const calcButton = document.getElementById("calculateBtn")
calcButton.addEventListener('click', function (e) {
    e.preventDefault()
    let height
    let weight
    let result = document.getElementById("bmiValue")
    if (imperialBtn.classList.contains("active")) {
        height = parseInt(document.getElementById("heightImperial").value)
        weight = parseInt(document.getElementById("weightimperial").value)
        result.innerHTML = (703 * weight) / (height ** 2);
    }
    else {
        height = parseInt(document.getElementById("heightMetric").value)
        weight = parseInt(document.getElementById("weightMetric").value)
        result.innerHTML = weight / ((height / 100) ** 2);
    }

    

    const res = document.querySelector("#resultArea")
    res.classList.remove("hidden") 
})