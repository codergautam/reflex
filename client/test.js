var status = "notstarted"
var ms = 0

function ready() {
    status = "justclickitalready";
    document.getElementById("button").innerHTML = "CLICK NOW!";
    document.getElementById("button").style.background = '	#90EE90';
    setInterval(function() {
            if (status == "justclickitalready") {
                ms += 1
            }
        },
        1);
}


function rand(max, min) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function Game() {
    if (status == "notstarted") {
        document.getElementById("button").innerHTML = "Dont click yet.....";
        document.getElementById("button").style.background = '	#FF0000';
        status = "waiting"
        setTimeout(function() {
            ready();
        }, rand(2000, 5000));


    } else if (status == "waiting") {
        alert("Click when the button turns green");
    } else if (status == "justclickitalready") {
        status = "done"
        document.getElementById("button").innerHTML = "Refresh to play again";
        document.getElementById("button").style.background = '	#add8e6';
        document.getElementById("score").innerHTML = "Your reflex was " + ms + " ms";
    }
}