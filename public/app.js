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

    document.getElementById('container').style.backgroundColor = 'white'
    document.getElementById('container').style.backgroundColor = 'rgba(255,255,255, .6)'
    document.getElementById('container').style.transition = '5s'
    document.getElementById('background').className = 'background'

})
