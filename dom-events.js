const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

// window.onload = () => {
//   greetingEl.innerText = "oh, hey there!"
//   renderAstros()
// }
//
// renderAstros = () => {
//   const astros = peopleInSpace["people"]
//   let peopleEls = astros.map((a) => {
//     let name = a["name"]
//     return `<li>${name}</li>`
//   })
//   astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
// }

//N O T E: what object comes with the object listener?

// create a function that alerts "these are all the astronauts!" when the title element is clicked.
var title = document.getElementsByClassName('title')[0]
console.log(title)
title.onclick = () => {
  alert("You clicked on a title! Congratulations!")
}

// log to the console the client's x coordinate of their mouse as they move it around the window.
document.onmousemove = () => {
  var x = event.clientX;     // get horizontal coordinate
  var y = event.clientY;     // get vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor)
}

// make an element that displays the most recent key pressed in the DOM
// make a elem, div, span, etc.
var keyDiv = document.getElementById("key")
console.log(keyDiv)
document.onkeypress = () => {
  let char = event.keyCode
  //console.log("You pressed a key.") // tells us we pressed a key
  keyDiv.innerHTML = String.fromCharCode(char)
}

// create a text input element. When a user clicks on the text field to input, log the input
// element to console.
var input = document.getElementById("input0")
console.log(input)
input.onclick = () => {
  console.log(input)
}

// when a user clicks away from the input, console.log ("bye") to the console.

//GOAL render input text to the DOM s.t. don't have to refresh the whole page every time
// wrap the input element with a form element. (i.e. <form></form> tag)
const form = document.getElementById("almost lunch")
//want to pass in an event that stores data specific to the event that occured ()
//preventDefault prevents full refresh (which is the default)
const textInput = document.getElementById("textInput")
const answer = document.getElementById("answer")
form.onsubmit = (event) => {
    event.preventDefault()
    //get text that was typed in AND render to the domString
    console.log(textInput.value)
    answer.innerText = textInput.value
}
//innerHTML // HTML that actually has li texts (HTML elements w/in)
//innerText // string that you literally want to render as is

// when the form is submitted, render the client's inputted text to the DOM

// HINT: look into event.preventDefault()
