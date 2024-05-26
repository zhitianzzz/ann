//coded with copilot
window.onload = function() {
    var imageContainer = document.getElementById('imageContainer');
    var randomIndex = Math.floor(Math.random() * 49); // Choose a random index for the special image

    for (var i = 0; i < 49; i++) {
        var img = document.createElement('img');
        img.src = "myHome/onWay1.jpg";
        img.alt = "onWay1";
        img.className = "onWay";

        // Create a link element
        var a = document.createElement('a');

        // If the current index is the chosen random index, link to onWay2.html
        // Otherwise, link to index.html
        if (i === randomIndex) {
            a.href = "myHome/onWay2.html";
        } else if (i === 24) {
            a.href = "myHome/diary1.html";
        }
        else {
            a.href = "myHomeLost.html";
        }

        // Wrap the image with the link
        a.appendChild(img);

        // Append the link (with the image) to the container
        imageContainer.appendChild(a);
    }
}

