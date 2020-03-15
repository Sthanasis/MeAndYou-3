import { callWeatherApi } from '../modules/data.mjs';

let submitBtn = document.getElementById('submitButton');
let input = document.getElementById('cityInput');
let body = document.querySelector('body')
body.className = 'someClass'

input.addEventListener('keyup', (event)=>{
    event.preventDefault();
    if(event.keyCode === 13){
        submitBtn.click();
    }
})

submitBtn.addEventListener('click',()=>{
     
    callWeatherApi();
    
    if(document.getElementById('flex-container').style.display === 'none'){
        document.getElementById('flex-container').style.display = 'flex'
    }
})
