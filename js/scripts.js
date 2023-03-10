console.log("hello, DOM!")

// using the document to select an element and assign it to a varaible
const body = document.querySelector("body")
// console.log(body) //POJO
// console.dir(body.style)

const button = document.querySelector("#colorChangeButton")
console.log(button)
button.addEventListener("click", function() {
    // selecting elements with getElementById, do not use a #
    const colorInput = document.getElementById("colorInput")
    console.dir(colorInput)
    body.style.backgroundColor = colorInput.value
    colorInput.value = "" // clear out the input
})

// method chaining
document.querySelector("#movieList").addEventListener("click", function(event) {
    console.log("movie list has been clicked!")
    console.log(event.target)
    // event.target.style.backgroundColor = "yellow"
    // you can also element.classList.remove("class name")
    event.target.classList.add("yellowBackground")

}) 

// document.querySelector("#movieTwo").addEventListener("click", function() {
//     console.log("movieTwo was just clicked")
// })

// document.addEventListener("DOMContentLoaded", function() {
//     // all this will load after the html
//     const body = document.querySelector("body")
//     console.log(body)
// })