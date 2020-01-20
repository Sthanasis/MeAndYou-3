import {callWeatherApi } from './modules/data.mjs'

const button = document.getElementById('submitButton')

button.addEventListener("click",()=>{
    callWeatherApi()
})

