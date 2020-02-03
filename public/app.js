import { callWeatherApi } from '../modules/data.mjs';

const submitBtn = document.getElementById('submitButton');
const input = document.getElementById('cityInput');

input.addEventListener('keyup', (event)=>{
    event.preventDefault();
    if(event.keyCode === 13){
        submitBtn.click();
    }
})

submitBtn.addEventListener('click',()=>{
    callWeatherApi();
})
