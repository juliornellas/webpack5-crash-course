import generateJoke from "./generateJoke"
import './styles/main.scss'
import candy from './assets/candy-cane-13031.svg'

const candyImg = document.getElementById('candyImg')
candyImg.src = candy

console.log(generateJoke())
console.log('teste do clean 3')