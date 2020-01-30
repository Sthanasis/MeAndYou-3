import { callWeatherApi } from './modules/data.mjs'

const submitBtn = document.getElementById('submitButton')

submitBtn.addEventListener("click",()=>{
    callWeatherApi()
    const element = document.getElementById('cityInput')
    const element2 = document.getElementById('submitButton')
    element.style.display = 'none'
    element2.style.display = 'none'
})
