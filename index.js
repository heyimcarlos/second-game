let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('rgbColor');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#resetBtn');
let modeBtns = document.querySelectorAll('.mode');

initialize();

function initialize() {
    setUpModeBtns();
    setUpSquares()
    reset();
}

function setUpModeBtns() {
    for (let i = 0; i < modeBtns.length; i++) {
        const buttons = modeBtns[i];
        buttons.addEventListener('click', function() {
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? colors = generateRandomColors(3) : colors = generateRandomColors(6);
            reset();
        })
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; ++i) {
        const currentBox = squares[i];
        currentBox.style.backgroundColor = colors[i];
        // add click listeners to squares.
        currentBox.addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetBtn.textContent = "PLAY AGAIN?"
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "TRY AGAIN"
            }
            
        });
    }
}


function reset() {
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    colorsAssign();
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    resetBtn.textContent = 'NEW COLORS'
}

resetBtn.addEventListener('click', function() {
    colors = generateRandomColors(colors.length);
    reset();
});

function generateRandomColors(num) {
    let randomColors = [];
    for(let i = 0; i < num; ++i) {
        randomColors.push(colorRandomizer());
    }
    return randomColors;
}

function colorRandomizer() {
    let rgb = [];
    for(let i = 0; i <= 2; ++i) {
        let colorPicker = Math.floor(Math.random() * 256);
        rgb.push(colorPicker)
    }
    rgb = rgb.join(', ');
    return `rgb(${rgb})`;
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    // pick a random number of the colors array.
    return colors[random];
}

function changeColors(color) {
    for(let i = 0; i < colors.length; ++i) {
        const currentColor = squares[i];
        currentColor.style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function colorsAssign() {
    for (let i = 0; i < squares.length; i++) {
        const element = squares[i];
        if(colors[i]) {
            element.style.background = colors[i]
        } else {
            element.style.background = '#232323';
        }
    }
}