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

//$('#div1').text('makeme') // to change the innertext of the element with id div1
// it will remove all the childs of this element


// adding css with jquery

$('#div2').css("width", 120 + 'px') 

// you can even add multiple properties 

$('#div2').css({
    "width" : 50 + 'px',
    "height" : 50 + 'px',
    "backgroundColor" : "blue"
})


// you can add and remove class easily 

$('#div3 div').addClass("disappear") // adds disappear class to all the div under div3

$('div, p').addClass("makey") // adds makey class to both all divs and all p tags
// you can also add two classes to a element

// similar removeClass() and toggleClass() behaves 

$("#div3 div").removeClass("disappear")


// Events in Jquery
$("#btn1").click(function() {
    alert("Hey I am clicked");
})

// or you can use
$("#div3").on("click" , function() {
    alert("Hey I am clicked");
})