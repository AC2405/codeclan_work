document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

const button =document.querySelector('#button')
button.addEventListener('click', handleButtonClick)

const textInput = document.querySelector('input')
textInput.addEventListener('input', handleInput)

const select = document.querySelector('#select')
select.addEventListener('change', handleSelectChange)

const form = document.querySelector('#form')
form.addEventListener('submit',handleFormSubmit)
});
const handleButtonClick = function(){
  const resultParagrapgh = document.querySelector('#button-result')
resultParagrapgh.textContent = "you filthy weeb"
}
const handleInput = function(event){
const resultParagrapgh = document.querySelector('#input-result')
resultParagrapgh.textContent = event.target.value
}
const handleSelectChange = function(event){
 const resultParagrapgh = document.querySelector('#select-result')
 resultParagrapgh.textContent = " you selected " + event.target.value
}
const handleFormSubmit = function(event){
  event.preventDefault()
const resultParagrapgh = document.querySelector('#form-result')
resultParagrapgh.textContent = " Your Name and age is " + event.target.first_name.value + " " + event.target.age.value
}