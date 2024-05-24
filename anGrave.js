//INDEX PG
//show alert
function showAlert() {
    alert("Dig into the grave; find items; insert code; find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find me;find...");
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = 'find me';
    }
}

//search for ITEMS
//coded with copilot
function handleSearch(query) {
    var searchResult = document.getElementById('myFriend');
    var searchResult = document.getElementById('myGod');
    var searchResult = document.getElementById('myJob');
    var searchResult = document.getElementById('myMind');
    var searchResult = document.getElementById('myLove');
    var searchResult = document.getElementById('myCommunity');
    var searchResult = document.getElementById('myBed');

    if (query === 'zlSvernaqFcver') {
        searchResult.href = 'myFriendSpider.html';
        searchResult.textContent = 'myFriend🕷️';
    } 
    else if (query === 'zlTbqVfurer') {
        searchResult.href = 'myGodIsHere.html';
        searchResult.textContent = 'myGodIsHere';
    } 
    else if (query === 'zlWboObevat') {
        searchResult.href = 'myJobBoring.html';
        searchResult.textContent = 'myJobBoring';
    } 
    else if (query === 'zlOrqmmmm') {
        searchResult.href = 'myBedzzzz.html';
        searchResult.textContent = 'myBedzzzz';
    } 
    else if (query === 'zlPbzzhavglQbAbgPner') {
        searchResult.style.display = 'block';
        searchResult.href = 'myCommunityDoNotCare.html';
        searchResult.textContent = 'myCommunityDoNotCare';
    } 
    else if (query === 'zlYbirAbgUhzna') {
        searchResult.href = 'myLoveNotHuman.html';
        searchResult.textContent = 'myLoveNotHuman';
    } 
    else if (query === 'zlZvqaFvyyyl') {
        searchResult.href = 'myMindSilly.html';
        searchResult.textContent = 'myMindSilly';
    } 
    else {
        searchResult.style.display = 'none';
    }

    // Get all buttons
    var buttons = document.getElementsByTagName('button');

    // Update href and textContent of all buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            window.location.href = searchResult.href;
        };
        buttons[i].textContent = searchResult.textContent;
        speakText(this.textContent);
    }
}

//creating buttons at random positions
//coded with copilot
window.onload = function() {
    var container = document.getElementById('buttonContainer');
    var searchContent = document.querySelector('.searchContent').getBoundingClientRect();

    for (var i = 0; i < 45; i++) {
        var button = document.createElement('button');
        button.textContent = 'Button ' + (i + 1);
        button.textContent = 'h3llo';
        button.style.position = 'absolute';
        button.style.whiteSpace = 'nowrap';
        speakText(this.textContent);

        var left, top;
        do {
            left = Math.random() * (window.innerWidth - button.offsetWidth * 2);
            top = Math.random() * (window.innerHeight - button.offsetHeight * 2);
        } 
        while (left > searchContent.left && left < searchContent.right 
            && top > searchContent.top && top < searchContent.bottom);

        button.style.left = left + 'px';
        button.style.top = top + 'px';
        container.appendChild(button);

        // Add event listener to the button
        button.addEventListener('click', function() {
            if (this.textContent === 'h3llo') {
                this.textContent = 'nice to meet you';
                speakText(this.textContent);
            }  else if (this.textContent === 'nice to meet you') {
                this.textContent = 'how are you';
                speakText(this.textContent);
            } else if (this.textContent === 'how are you') {
                this.textContent = "i'm doing well, thanks";
                speakText(this.textContent);
            } else if (this.textContent === "i'm doing well, thanks") {
                this.textContent = 'did you have a nice weekend?';               
                speakText(this.textContent);
            } else if (this.textContent === "did you have a nice weekend?") {
                this.textContent = "oh, you did? that's great!";        
                speakText(this.textContent);
            } else if (this.textContent === "oh, you did? that's great!") {
                this.textContent = "what did you get up to?";           
                speakText(this.textContent);
            } else if (this.textContent === "what did you get up to?") {
                this.textContent = "that sounds fun! what did you see?";           
                speakText(this.textContent);
            } else if (this.textContent === "that sounds fun! what did you see?") {
                this.textContent = "oh, that's cool!";           
                speakText(this.textContent);
            } else if (this.textContent === "oh, that's cool!") {
                this.textContent = "me? i just slept in and relaxed, you know, as usual";           
                speakText(this.textContent);
            } else if (this.textContent === "me? i just slept in and relaxed, you know, as usual") {
                this.textContent = "anyway, it was great catching up";           
                speakText(this.textContent);
            } else if (this.textContent === "anyway, it was great catching up") {
                this.textContent = "see you later";           
                speakText(this.textContent);
            } else if (this.textContent === 'find me') {
                speakText(this.textContent);
                alert('Did you find me?');
            } else {
                speakText(this.textContent);
            }
        });
    }
}

//speak text
function speakText(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();

    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = function() {
            voices = window.speechSynthesis.getVoices();
            utterance.voice = voices[148]; //whisper voice
            window.speechSynthesis.speak(utterance);
        };
    } else {
        utterance.voice = voices[148]; //whisper voice
        window.speechSynthesis.speak(utterance);
    }

    //To get the list of voices available in the system
    // for (var i = 0; i < voices.length; i++) {
    //     console.log(i + ": " + voices[i].name);
    // }
}
