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
    let container = document.getElementById('container').style
    container.backgroundColor = 'white'
    container.backgroundColor = 'rgba(255,255,255, .6)'
    container.transition = '5s'
    document.getElementById('background').className = 'background'

})
