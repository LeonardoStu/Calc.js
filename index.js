const input = document.getElementById('input')

import { calculate } from "./functions/calculate.js"
import copyToClipBoard from "./functions/copyToClipBoard.js"
import themeSwitcher from "./functions/themeSwitcher.js"
import keydown from "./functions/keydown.js"

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)

input.addEventListener('keydown', keydown)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)