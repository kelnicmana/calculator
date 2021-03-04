let current = 0;
let stored = 0;
let operator = 'none';
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;
const power = (a, b) => Math.pow(a, b);

function operate(o) {
    if (o == 'add') {
        stored = parseInt(current) + stored;
        document.querySelector('.display').innerHTML = stored;
        current = 0;
    }
    else if (operator = 'sub') {
        current = parseInt(current) - stored;
        stored = current;
        document.querySelector('.display').innerHTML = stored;
    }
    else if (operator = 'mul') {
        current = parseInt(current) + stored;
        stored = current;
        document.querySelector('.display').innerHTML = stored;
    }
    else if (operator = 'div') {
        current = parseInt(current) + stored;
        stored = current;
        document.querySelector('.display').innerHTML = stored;
    }
    else if (operator = 'pow') {
        current = parseInt(current) + stored;
        stored = current;
        document.querySelector('.display').innerHTML = stored;
    }
}

document.querySelector('.add').onclick = function() {
    if (operator !== 'none') {
    operate(operator);
    }
    else {stored = current;}
    operator = 'add';
    current = 0;
}
document.querySelector('.sub').onclick = function() {
    if (operator !== 'none') {
    operate(operator);}
    operator = 'sub';
}
document.querySelector('.mul').onclick = function() {
    if (operator !== 'none') {
    operate(operator);}
    operator = 'mul';
}
document.querySelector('.div').onclick = function() {
    if (operator !== 'none') {
    operate(operator);}
    operator = 'div';
}

document.querySelector('.display').innerHTML = current;

document.querySelector('.one').onclick = function() {
    current === 0 ? current = 1 : current += '1';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.two').onclick = function() {
    current === 0 ? current = 2 : current += '2';
    document.querySelector('.display').innerHTML = current;}

    document.querySelector('.three').onclick = function() {
    current === 0 ? current = 3 : current += '3';
    document.querySelector('.display').innerHTML = current;}

    document.querySelector('.four').onclick = function() {
    current === 0 ? current = 4 : current += '4';
    document.querySelector('.display').innerHTML = current;}

    document.querySelector('.five').onclick = function() {
        if (current === 'inactive') {
            document.querySelector('.display').innerHTML = stored;
        }
        else if (current === 0) {
            current = 5
        }
        else {current += '5';
    document.querySelector('.display').innerHTML = current;
        }
}

    document.querySelector('.six').onclick = function() {
    current === 0 ? current = 6 : current += '6';
    document.querySelector('.display').innerHTML = current;}

    document.querySelector('.seven').onclick = function() {
    current === 0 ? current = 7 : current += '7';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.eight').onclick = function() {
    current === 0 ? current = 8 : current += '8';
    current = parseFloat(current);
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.nine').onclick = function() {
    current === 0 ? current = 9 : current += '9';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.zero').onclick = function() {
    current === 0 ? current = 0 : current += '0';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.posneg').onclick = function() {
    current != 0 ? current = -current : 0;
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.ac').onclick = function() {
    current = 0;
    stored = 0;
    operator = 'none';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.c').onclick = function() {
    current === 0 ? current = 0 : current = current.slice(0, -1);
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.dec').onclick = function() {
    current += '.';
    document.querySelector('.display').innerHTML = current;}