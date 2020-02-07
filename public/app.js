import { callWeatherApi } from '../modules/data.mjs';

let submitBtn = document.getElementById('submitButton');
let input = document.getElementById('cityInput');

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
    container.backgroundColor = 'rgba( 0, 0, 0, .5)'
    container.transition = '3s'
    
    document.getElementById('background').className = 'background'
    document.getElementById('background').style.filter = 'blur(8px)';
    
    if (container.opacity === '0'){
        container.opacity = '1'
    }
    
    submitBtn.disabled = true; 
    
})
