let yesButton = document.getElementById('yes-btn');
let noButton = document.getElementById('no-btn');
let message = document.getElementById('message');
let gifContainer = document.getElementById('gif-container'); // To display GIFs
let size = 20;

let messages = [
    "Are you sure? 💔 Because my heart beats only for you! ❤️",
    "Soch le ache se ek baar!!",
    "Every time you say no, a puppy somewhere cries... 🐶😭",
    "I'll keep asking until you say yes! 😘",
    "Manja na! Kitna bhav khaegi 😭",
    "Even Google couldn't find someone better for me than you! 💕",
    "No? I'll wait... forever if I have to! ⏳❤️",
    "The stars shine only for you! 🌟 Say yes, please!",
    "You're the missing piece of my heart. 🧩💖",
    "My mom already likes you, so you have to say yes! 😜",
    "Say yes, and I'll bring you chocolates every day! 🍫🥰"
];

const gifs = [
    "/static/gifs/manja.gif",
    "/static/gifs/puppy-eyes.gif",
    "/static/gifs/cat-meow.gif",
    "/static/gifs/boba.gif"
];

let index = 0;

function increaseYesSize() {
    // Increase Yes button size
    size += 10;
    yesButton.style.fontSize = size + 'px';
    yesButton.style.padding = (size / 2) + 'px ' + size + 'px';

    // Change message
    message.innerText = messages[index];

    // Change GIF
    gifContainer.innerHTML = `<img src="${gifs[index]}" width="300px" alt="GIF">`;

    index = (index + 1) % gifs.length; 

    // Move No button to a random position
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

// When she clicks YES, redirect to the new page
yesButton.onclick = function() {
    window.location.href = "/yes";  // Redirect to the new page
};

noButton.onclick = increaseYesSize;
