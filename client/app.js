state = 0
round = 1

function showhide(show, hide) {
    document.getElementById(show).style.display = ""
    document.getElementById(hide).style.display = "none"
}

document.getElementById("start").onclick = () => {
    showhide("enterbday", "welcome")
}
document.getElementById("datedone").onclick = () => {
    age = document.getElementById("age").value
    if (!age || age < 5 || age > 100) return
    showhide("how2play", "enterbday")
}
document.getElementById("game").onclick = () => {
    if (!age || age < 5 || age > 100) return
    game()
}

function game() {
    showhide("game-1", "how2play")
}