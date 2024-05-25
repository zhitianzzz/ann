function playMuyu() {
    var audio = document.getElementById('muyu');
    audio.play();
}

function playBurn() {
    var audio = document.getElementById('burn');
    audio.play();
}

function playPig() {
    var audio = document.getElementById('pig');
    audio.play();
}

function playPrpr() {
    var audio = document.getElementById('prpr');
    audio.play();
}

function toPathA() {
    window.location.href = "myGodIsHerePathA.html";
}

function toPathB() {
    window.location.href = "myGodIsHerePathB.html";
}

function toGate() {
    window.location.href = "myGodIsHereGate.html";
}

function toEntrance() {
    window.location.href = "myGodIsHereP5/entrance.html";
}

//pray
var prayCount = 0;

function pray() {
    prayCount++;
    if (prayCount === 1) {
        var name = prompt('Tell me your name, mortal.');
        alert('You have been seen, ' + name + '.');
        prompt(name + ', what brings you here?');
        alert('You have been heard, ' + name + '.');
        hasPrayed = true;
    } else if (prayCount === 2) {
        alert(name + ', you are too greedy.');
    }  else if (prayCount === 3) {
        alert('Mortal, you are too greedy.');
    }  else if (prayCount === 4) {
        alert('Mortal, you will be punished for your greed.');
    } else {
        alert('Mortal, you will be punished for your greed.');
        document.body.innerHTML = '';
    }
}
