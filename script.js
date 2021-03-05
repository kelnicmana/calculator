let current = 0;
let stored = 0;
let operator = 'none';
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
    console.log(clicks);
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
    console.log(clicks);
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
    console.log(clicks);
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
    console.log(clicks);
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
    console.log(clicks);
}

document.querySelector('.eql').onclick = function() {
    operate(operator);
    operator = 'none';
    current = stored;
    clicks.shift();
    clicks.push('else');
}

document.querySelector('.one').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 1 : current += '1';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.two').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 2 : current += '2';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.three').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 3 : current += '3';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.four').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 4 : current += '4';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.five').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 5 : current += '5';
    document.querySelector('.display').innerHTML = current;}
    
document.querySelector('.six').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 6 : current += '6';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.seven').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 7 : current += '7';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.eight').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 8 : current += '8';
    current = parseFloat(current);
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.nine').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 9 : current += '9';
    document.querySelector('.display').innerHTML = current;}

document.querySelector('.zero').onclick = function() {
    clicks.shift();
    clicks.push('else');
    current === 0 ? current = 0 : current += '0';
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
    current === 0 ? current = 0 : current = current.slice(0, -1);
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