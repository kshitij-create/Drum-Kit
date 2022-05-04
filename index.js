// Keyboard Events

document.addEventListener("keypress", function (event) {
    if (event.key=="w") {
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        document.getElementById("w").classList.add("add");
        setInterval(() => {
            document.getElementById("w").classList.remove("add")
        }, 200)
    }
    else if (event.key=="a") {
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        document.getElementById("a").classList.add("add");
        setInterval(() => {
            document.getElementById("a").classList.remove("add")
        }, 200)
    }
    else if (event.key=="s") {
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        document.getElementById("s").classList.add("add");
        setInterval(() => {
            document.getElementById("s").classList.remove("add")
        }, 200)
    }
    else if (event.key=="d") {
        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        document.getElementById("d").classList.add("add");
        setInterval(() => {
            document.getElementById("d").classList.remove("add")
        }, 200)
    }
    else if (event.key=="k") {
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
        document.getElementById("k").classList.add("add");
        setInterval(() => {
            document.getElementById("k").classList.remove("add")
        }, 200)
    }
    else if (event.key=="l") {
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        document.getElementById("l").classList.add("add");
        setInterval(() => {
            document.getElementById("l").classList.remove("add")
        }, 200)
    }
    else if (event.key=="j") {
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
        document.getElementById("j").classList.add("add");
        setInterval(() => {
            document.getElementById("l").classList.remove("add")
        }, 200)
    }
    
})