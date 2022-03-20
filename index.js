// practising Jquery


// selecting an element
// if you use ID return zero or one element
// in brackets you can pass any css selector like selecting in css
// para1 is jquery object

// var para1 = $('#p1');
// console.log(para1);

// para1.html('Shivangi') // changing the innerhtml


var allParas = $('.p1'); // select all p tags with class p1
console.log(allParas)

var p1 = allParas.eq(0) // gives a jquery object at index 0 

p1.text('Hello to you too') // changing the inner text

p1.hide();