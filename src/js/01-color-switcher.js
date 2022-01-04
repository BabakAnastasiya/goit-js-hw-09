const PROMPT_DELAY = 1000;

const refs = {body : document.querySelector ('body'),
startBtn : document.querySelector('button[data-start]'),
stopBtn : document.querySelector('button[data-stop]'),
};

function changeBCgColor() {
    let color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
}

function startHandler () {
    refs.startBtn.disabled = true;
    intervalId = setInterval (changeBCgColor, PROMPT_DELAY);
}

function stopHandler (){
    clearInterval (intervalId);
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startHandler)
refs.stopBtn.addEventListener('click', stopHandler)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }