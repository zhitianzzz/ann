//coded with copilot
window.onload = function() {
    var imageContainer = document.getElementById('imageContainer');
    var randomIndex = Math.floor(Math.random() * 49); // Choose a random index for the special image

    for (var i = 0; i < 49; i++) {
        var img = document.createElement('img');
        img.src = "onWay3.jpg";
        img.alt = "onWay3";
        img.className = "onWay";

        // Create a link element
        var a = document.createElement('a');

        // If the current index is the chosen random index, link to onWay2.html
        // Otherwise, link to index.html
        if (i === randomIndex) {
            a.href = "onWay4.html";
        } else if (i === 27) {
            a.href = "diary3.html";
        } else {
            a.href = "onWay3.html";
        }

        // Wrap the image with the link
        a.appendChild(img);

        // Append the link (with the image) to the container
        imageContainer.appendChild(a);
    }
}