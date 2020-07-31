const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value);
}

document.querySelector('.clean').addEventListener('click', cleanDisplay);

function cleanDisplay() {
    display.value = "";
}

document.querySelector('.backspace').addEventListener('click', backspace);

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1)
}

// if(display.value.search('.') = true) {
//    display.value = display.value.toFixed(display.value.length - (display.value.indexOf('.') - 1));
// }