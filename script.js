let current = 0;
let total = 0;
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;
const power = (a, b) => Math.pow(a, b);
const posneg = a => a != 0 ? a = -a : 0;

function operate() {

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
    document.querySelector('.display').innerHTML = current;}
document.querySelector('.nine').onclick = function() {
    current === 0 ? current = 9 : current += '9';
    document.querySelector('.display').innerHTML = current;}
document.querySelector('.zero').onclick = function() {
    current === 0 ? current = 0 : current += '0';
    document.querySelector('.display').innerHTML = current;}