const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
const multiButton = document.querySelector('#multi');
const diviButton = document.querySelector('#divi');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

function insert(num) {
    document.form.display.value = document.form.display.value + num;
}

clearButton.addEventListener("click", clear);
function clear(){
    document.form.display.value = "";
}

equalButton.addEventListener("click", equal);

function equal() {
    document.form.display.value = eval(document.form.display.value);
}
zeroButton.addEventListener("click", zero);

function zero() {
    insert(0);
}
oneButton.addEventListener("click", one);

function one() {
    insert(1);
}
twoButton.addEventListener("click", two);

function two() {
    insert(2);
}
threeButton.addEventListener("click", three);

function three() {
    insert(3);
}
fourButton.addEventListener("click", four);

function four() {
    insert(4);
}
fiveButton.addEventListener("click", five);

function five() {
    insert(5);
}
sixButton.addEventListener("click", six);

function six() {
    insert(6);
}
sevenButton.addEventListener("click", seven);

function seven() {
    insert(7);
}
eightButton.addEventListener("click", eight);

function eight() {
    insert(8);
}
nineButton.addEventListener("click", nine);

function nine() {
    insert(9);
}addButton.addEventListener("click", add);

function add() {
    insert('+');
}subButton.addEventListener("click", sub);

function sub() {
    insert('-');
}diviButton.addEventListener("click", divi);

function divi() {
    insert('/');
}multiButton.addEventListener("click", multi);

function multi() {
    insert('*');
}