import { callWeatherApi } from './modules/data.mjs'

const submitBtn = document.getElementById('submitButton')

submitBtn.addEventListener("click",()=>{
    callWeatherApi()
    let element = document.getElementById('submit')
    element.style.display = 'none'
})

