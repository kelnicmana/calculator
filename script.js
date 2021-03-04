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
        stored = parseFloat(stored) + parseInt(current);
        document.querySelector('.display').innerHTML = stored;
        current = 0;
    }
    else if (o == 'sub') {
        stored = parseFloat(stored) - parseInt(current);
        document.querySelector('.display').innerHTML = stored;
        current = 0;
    }
    else if (o == 'mul') {
        stored = parseFloat(stored) * parseInt(current);
        document.querySelector('.display').innerHTML = stored;
        current = 0;
    }
    else if (o == 'div') {
        stored = parseFloat(stored) / parseInt(current);
        document.querySelector('.display').innerHTML = stored;
        current = 0;
    }
    else if (o == 'pow') {
        stored = Math.pow(parseFloat(stored), parseInt(current));
        document.querySelector('.display').innerHTML = stored;
        current = 0;
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
    operate(operator);
    }
    else {stored = current;}
    operator = 'sub';
    current = 0;
}
document.querySelector('.mul').onclick = function() {
    if (operator !== 'none') {
        operate(operator);
    }
    else {stored = current;}
    operator = 'mul';
    current = 0;
}
document.querySelector('.div').onclick = function() {
    if (operator !== 'none') {
        operate(operator);
    }
    else {stored = current;}
    operator = 'div';
    current = 0;
}
document.querySelector('.pow').onclick = function() {
    if (operator !== 'none') {
        operate(operator);
    }
    else {stored = current;}
    operator = 'pow';
    current = 0;
}
document.querySelector('.eql').onclick = function() {
    operate(operator);
    operator = 'none';
    current = stored;
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
    current === 0 ? current = 5 : current += '5';
    document.querySelector('.display').innerHTML = current;}
    
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
    if (current == 'inactive') {
        stored != 0 ? stored = -stored : 0;
    document.querySelector('.display').innerHTML = stored;
    }
    else {
    current != 0 ? current = -current : 0;
    document.querySelector('.display').innerHTML = current;
    }
}

document.querySelector('.ac').onclick = function() {
    current = 0;
    stored = 0;
    operator = 'none';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.c').onclick = function() {
    if (typeof current !== 'string') {
        current = current.toString();
    }
    current === 0 ? current = 0 : current = current.slice(0, -1);
    if (current.length <= 0) {
        current = 0;
    }
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.dec').onclick = function() {
    if (typeof current !== 'string') {
        current = current.toString();
    }
    if (!current.includes('.')) {
    current += '.';
    document.querySelector('.display').innerHTML = current;
    }
}