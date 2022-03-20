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

//p1.hide(); // to hide the p1 p tag

allParas.hide(1000) // it will hide all the paras after 1s creating a animation effect

// in hide you can also use speed, callback 

$('#div1').text('makeme') // to change the innertext of the element with id div1
// it will remove all the childs of this element