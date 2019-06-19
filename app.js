window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio) return; // stop the function from running unneccessarily
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
});