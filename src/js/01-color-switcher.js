const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', () => ColorSwitcher[onBtnStart()]);
btnStop.addEventListener('click', () => ColorSwitcher[onBtnStop()]);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeRandomColor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
    constructor(onChangeRandomColor) {
        this.isActive = false;
        this.intervalID = null;
        this.onChangeRandomColor = onChangeRandomColor;
        btnStop.disabled = true;
    }
}

function onBtnStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;

    if (this.isActive) {
        return;
    }
    this.isActive = true;
    this.intervalID = setInterval(() => onChangeRandomColor(getRandomHexColor()), 1000)
};

function onBtnStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
};

const colorSwitcher = new ColorSwitcher();



// const refs = {
//   startBtn: document.querySelector('button[data-start]'),
//   stopBtn: document.querySelector('button[data-stop]'),
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function updateBodyBGcolor(color) {
//   document.body.style.backgroundColor = color;
// }

// class ColorSwitcher {
//   constructor(updateBodyBGcolor) {
//     this.intervalID = null;
//     this.isActive = false;
//     this.updateBodyBGcolor = updateBodyBGcolor;
//     refs.stopBtn.disabled = true;
//   }

//   startChangeBGcolor() {
//     if (this.isActive) {
//       return;
//     }

//     refs.startBtn.disabled = true;
//     refs.stopBtn.disabled = false;

//     this.isActive = true;
//     this.intervalID = setInterval(() => updateBodyBGcolor(getRandomHexColor()), 1000);
//   }

//   stopChangeBGcolor() {
//     refs.startBtn.disabled = false;
//     refs.stopBtn.disabled = true;

//     clearInterval(this.intervalID);
//     this.isActive = false;
//   }
// }

// const colorSwitcher = new ColorSwitcher();

// refs.startBtn.addEventListener('click', () => colorSwitcher.startChangeBGcolor());
// refs.stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBGcolor());