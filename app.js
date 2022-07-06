let num = parseInt(Math.random()*100 + 1)

function onClick() {
    const val = document.getElementById("val")
    const result = document.getElementById("result")
    if (val.value == "") {
        result.textContent = "You have not entered any number😕"
    } else if (parseInt(val.value) > 100 || parseInt(val.value) < 1) {
        result.textContent = "Number entered is not in range😞"
    } else if (parseInt(val.value) === num) {
        result.textContent = "You found the number🥳"
    } else if (parseInt(val.value) > num) {
        result.textContent = "The number is smaller"
    } else {
        result.textContent = "The number is larger"
    }
}