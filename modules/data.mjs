import axios from 'axios' 
import { convertToDay , getTime, convertKelvinToCelsius , iconUrl, appendDivs, updateDivs } from '../modules/methods.mjs'

let days = []

function callWeatherApi(){
    let query = document.getElementById('cityInput').value.trim()
    if(query) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=196d16292a50e2189701f534273cad52`)
        .then(response => {
            if(days.length === 0){
                createDataObject(response.data)
                appendHeader(response.data, 'create')
                appendDivs(days)
            } else {
                createDataObject(response.data)
                appendHeader(response.data, 'update')
                updateDivs(days)
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
        if(currentDay !== convertedDate && currentTime === getTime(el.dt_txt) ){
            currentDay = convertedDate
            days.push(el)
        }
    })
    if(days.length === 6){
        days.pop(5)
    } 
}

// Working On Div #title 
// ===============================================================
// Display City and Country Name
function appendHeader(data, operation){
    if(operation === 'create'){
        let header = document.createElement('div')
        let text = document.createTextNode(`${data.city.name}, ${data.city.country}`)
        header.appendChild(text)
        header.id = `header`
        document.getElementById('title').appendChild(header)
    } else {
        let header = document.getElementById(`header`)
        header.innerHTML = `${data.city.name}, ${data.city.country}`
    }
}

function appendDate(item, i,  operation){
    if (operation === 'create') {
            let day = document.createElement('div')
            let text = document.createTextNode(convertToDay(item.dt_txt))
            day.appendChild(text)
            day.id = `day${i}`
            day.className = 'days'
            document.getElementById(`div${i}`).appendChild(day)
    } else {
            let day = document.getElementById(`day${i - 1}`)
            day.innerHTML = convertToDay(days[i - 1].dt_txt)
    }
}

function appendTemp(item, i,  operation){
    if(operation === 'create'){
        let temp = document.createElement('div')
        let text = document.createTextNode(convertKelvinToCelsius(item.main.temp))
        temp.appendChild(text)
        temp.id = `temp${i}`
        temp.className = 'temperatures'
        document.getElementById(`div${i}`).appendChild(temp)
    } else {
        let temp = document.getElementById(`temp${i - 1}`)
        temp.innerHTML = convertKelvinToCelsius(days[i - 1].main.temp)
    }
}

function appendIcon(item, i , operation){
    if(operation === 'create'){
        let icon = document.createElement('img')
        icon.src = iconUrl(item.weather[0].icon)
        icon.id = `icon${i}`
        icon.className = 'icons'
        document.getElementById(`div${i}`).appendChild(icon)
    } else {
        let icon = document.getElementById(`icon${i - 1}`)
        icon.src = iconUrl(days[i - 1].weather[0].icon)
    }
}

function appendDescription(item, i , operation){
    if(operation === 'create'){
        let description = document.createElement('div')
        let text = document.createTextNode(item.weather[0].description)
        description.appendChild(text)
        description.id = `description${i}`
        description.className = 'descriptions'
        document.getElementById(`div${i}`).appendChild(description)
    } else {
        let description = document.getElementById(`description${i - 1}`)
        description.innerHTML = days[i - 1].weather[0].description
    }
}

export {appendDate, appendDescription, appendIcon, appendTemp, createDataObject, callWeatherApi}