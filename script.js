// script.js
const playButton = document.getElementById('play-button');
const videoContainer = document.getElementById('video-container');
const typingText = document.getElementById('typing-text');
const textElement = document.getElementById('text');

let text = "Love is another of happiness...";
let index = 0;

playButton.addEventListener('click', () => {
    videoContainer.style.display = 'block';
    playButton.style.display = 'none';
    typingText.style.display = 'block';
    typeText();
});

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text[index];
        index++;
        setTimeout(typeText, 50);
    }
}