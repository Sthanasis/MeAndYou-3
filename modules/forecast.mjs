import { convertToDay, convertKelvinToCelsius , iconUrl } from '../modules/methods.mjs'
import {days} from '../modules/data.mjs' 


function appendTemp(item, i,  operation){
    if(operation === 'create'){
        let temp = document.createElement('div')
        let text = document.createTextNode(convertKelvinToCelsius(item.main.temp))
        temp.appendChild(text)
        temp.id = `temp${i}`
        temp.className = 'temperatures'
        document.getElementById(`div${i}`).appendChild(temp)
    } else {
        let temp = document.getElementById(`temp${i}`)
        temp.innerHTML = convertKelvinToCelsius(days[i].main.temp)
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
        let icon = document.getElementById(`icon${i}`)
        icon.src = iconUrl(days[i].weather[0].icon)
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
        let description = document.getElementById(`description${i}`)
        description.innerHTML = days[i].weather[0].description
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
        let day = document.getElementById(`day${i}`)
        day.innerHTML = convertToDay(days[i].dt_txt)
    }
}



export { appendDate, appendDescription, appendIcon, appendTemp }