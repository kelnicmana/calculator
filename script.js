let current = 0;
let stored = 0;
let operator = 'none';
///purpose of clicks is to allow user to switch the currently selected operator without running the function operate before intended
let clicks = ['else', 'else'];
document.querySelector('.display').innerHTML = current;

function operate(o) {
    stored = parseFloat(stored);
    current = parseFloat(current);
    if (o == 'add') { stored += + current; }
    else if (o == 'sub') { stored -= current; }
    else if (o == 'mul') { stored *= current; }
    else if (o == 'div') {
        if (current == 0) {
            alert('You can\'t divide by zero!');
            stored = 0;
            }
            else {
            stored /= current;
        }
    }
    else if (o == 'pow') { stored = Math.pow(stored, current); }
    if (stored % 1 !== 0) {
        stored = parseFloat(stored.toFixed(2));
        if (stored * 100 % 10 === 0) {
            stored = parseFloat(stored.toFixed(1));
        }
    }
    document.querySelector('.display').innerHTML = stored;
    clicks.shift();
    clicks.push('else');
    current = 0;
}

document.querySelector('.add').onclick = function() {
    if (clicks[1] === 'ope') {
        operator = 'add';
    }
    else {
        if (operator !== 'none') {
            operate(operator);
        }
        else {stored = current;}
        operator = 'add';
        current = 0;
    }
    clicks.shift();
    clicks.push('ope');
}

document.querySelector('.sub').onclick = function() {
    if (clicks[1] === 'ope') {
        operator = 'sub';
    }
    else {
        if (operator !== 'none') {
            operate(operator);
        }
        else {stored = current;}
        operator = 'sub';
        current = 0;
    }
    clicks.shift();
    clicks.push('ope');
}

document.querySelector('.mul').onclick = function() {
    if (clicks[1] === 'ope') {
        operator = 'mul';
    }
    else {
        if (operator !== 'none') {
            operate(operator);
        }
        else {
            stored = current;
        }
        operator = 'mul';
        current = 0;
    }
    clicks.shift();
    clicks.push('ope');
}
document.querySelector('.div').onclick = function() {
    if (clicks[1] === 'ope') {
        operator = 'div';
    }
    else {
        if (operator !== 'none') {
            operate(operator);
        }
        else {stored = current;}
        operator = 'div';
        current = 0;
    }
    clicks.shift();
    clicks.push('ope');
}

document.querySelector('.pow').onclick = function() {
    if (clicks[1] === 'ope') {
        operator = 'pow';
    }
    else {
        if (operator !== 'none') {
            operate(operator);
        }
        else {stored = current;}
        operator = 'pow';
        current = 0;
    }
    clicks.shift();
    clicks.push('ope');
}

document.querySelector('.eql').onclick = function() {
    if (clicks[1] !== 'ope' && operator !== 'none') {
    operate(operator);
    operator = 'none';
    current = stored;
    clicks.shift();
    clicks.push('else');
    }
}



document.querySelector('.one').onclick = () => numbers(1);
document.querySelector('.two').onclick = () => numbers(2);
document.querySelector('.three').onclick = () => numbers(3);
document.querySelector('.four').onclick = () => numbers(4);
document.querySelector('.five').onclick = () => numbers(5);
document.querySelector('.six').onclick = () => numbers(6);
document.querySelector('.seven').onclick = () => numbers(7);
document.querySelector('.eight').onclick = () => numbers(8);
document.querySelector('.nine').onclick = () => numbers(9);
document.querySelector('.zero').onclick = () => numbers(0);

function numbers(num) {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = num : current += `${num}`;
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.posneg').onclick = function() {
    current != 0 ? current = -current : 0;
    document.querySelector('.display').innerHTML = current;
}

document.querySelector('.ac').onclick = function() {
    current = 0;
    stored = 0;
    operator = 'none';
    clicks = ['else', 'else'];
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.c').onclick = function() {
    if (typeof current !== 'string') {
        current = current.toString();
    }
    const strLen = current.length;
    current === 0 ? current = 0 : current = current.slice(0, -1);
    if (current.charAt(strLen - 2) === '.' || current.charAt(strLen - 2) === '-') {
        current = current.slice(0, -1);
    }
    if (current.length <= 0) {
        current = 0;
    }
    clicks.shift();
    clicks.push('else');
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.dec').onclick = function() {
    if (typeof current !== 'string') {
        current = current.toString();
    }
    if (!current.includes('.')) {
    current += '.';
    document.querySelector('.display').innerHTML = current;
    }
    clicks.shift();
    clicks.push('else');
}