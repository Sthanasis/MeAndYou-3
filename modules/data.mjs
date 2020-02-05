import axios from 'axios' 
import { appendDivs, appendHeader, updateDivs } from './partials.mjs'
import { convertToDay , getTime } from './methods.mjs'
import { appendAnalytics, updateAnalytics } from './analytical_partials.mjs' 

let days = []

function callWeatherApi(){
    let query = document.getElementById('cityInput').value.trim()
    if(query) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=196d16292a50e2189701f534273cad52`)
        .then(response => {
            if(days.length === 0){

                createDataObject(response.data)
                appendHeader(response.data, 'create')
                appendDivs(days, response.data.list)
                appendAnalytics(days, response.data.list)
                
                const element = document.getElementById('cityInput')
                const element2 = document.getElementById('submitButton')
                element.style.display = 'none'
                element2.style.display = 'none'
                
            } else {
                
                createDataObject(response.data)
                appendHeader(response.data, 'update')
                updateDivs(days, response.data.list)
                updateAnalytics(days, response.data.list)

            }
        }) 
        .catch(()=>alert('Please insert a valid city'))                   
    } else{
        alert('Please insert a city Name')
    }
}

// create object from API call to get Data
function createDataObject(data){
    days = []
    let currentDay = null
    let currentTime = getTime(data.list[0].dt_txt)

    data.list.forEach((el)=>{

        let convertedDate = convertToDay(el.dt_txt)

        if( currentDay !== convertedDate && currentTime === getTime(el.dt_txt) ){
            currentDay = convertedDate 
            days.push(el)
        }

    })
    if(days.length === 6){
        days.pop(5)
    }
}

export { callWeatherApi, days }