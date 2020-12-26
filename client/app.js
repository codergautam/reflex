var state = 0
var round = 0
var score = []
var show = false

function showhide(show, hide) {
    document.getElementById(show).style.display = ""
    document.getElementById(hide).style.display = "none"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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

document.getElementById("next").onclick = () => {
    if (!state == 3) return
    if (round == 3) {
        //showresult
        var average = score.reduce((a, b) => a + b) / score.length
        showhide("end", "result")
        document.getElementById("ms-end").innerHTML = `Your average reaction time is ${Math.round(average)} ms`
    } else {
        game()
    }
}

function game() {
    show = false
    if (typeof bruh != "undefined") clearTimeout(bruh)
    state = 1
    document.body.style.backgroundColor = "red"
    showhide("game-1", "result")
    showhide("game-1", "how2play")
    bruh = setTimeout(() => {
        state = 2
        start = Date.now()
        document.body.style.backgroundColor = "green"
        showhide("game-2", "game-1")
    }, getRandomInt(3000, 7000))

}

window.onclick = () => {
    if (state == 1 && show) {
        alert("Only click when the page turns green!")
        game()
    }
    if (state == 1 && !show) {
        show = true;
    }
    if (state != 2) return
    round += 1
    state = 3
    document.body.style.backgroundColor = "cyan"
    var ms = Date.now() - start
    showhide("result", "game-2")
    score.push(ms)
    document.getElementById("ms").innerHTML = `Your reaction time was ${ms} ms`
    document.getElementById("round").innerHTML = `Round ${round} of 3`
    if (round == 3) {
        document.getElementById("next").innerHTML = "Show results"

        //send results to server

        fetch("/submit", {
            method: "post",
            body: JSON.stringify({ age: age, score: score }),
            headers: { "Content-Type": "application/json" }
        })
    }

}