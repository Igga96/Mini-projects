const board = document.querySelector('#board')
const colors = ['#84B5AB', '#CEA7CC', '#8CC972', '#788ABC', '#CFD653', '#E56259', '#DD89CC']
const SQUARES_NUMBER =  400

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
 
 square.addEventListener('mouseover', () =>{
    setColor(square)
 }) 
  
 square.addEventListener('mouseleave', () =>{
    removeColor(square)
 }) 
 
    board.append(square)
}
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px`
}
function getRandomColor(){
const index = Math.floor(Math.random() * colors.length)
return colors[index]
}