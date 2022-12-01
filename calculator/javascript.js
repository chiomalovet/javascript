var x = parseInt(prompt('input value'));


var z = prompt("select operation" + '\n1. +' + '\n2.-' + '\n3.*' + '\n4./');
var y = parseInt(prompt('input value'));
var b = prompt('1. calculate ' + '2.continue');


if (z == 1) {
    var sum = x + y
    alert("answer=" + sum)
}

if (b == 2) {
    var c = parseInt(prompt('input value'));
    alert(good() + c);
}