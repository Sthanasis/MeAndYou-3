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

function appendMoreDataToDivs(item, i, operation, moreData){
    let currentDay = convertToDay(item.dt_txt)
    let min = moreData[0].main.temp_min
    let max = moreData[0].main.temp_max
    moreData.forEach((el)=>{
        if(currentDay === convertToDay(el.dt_txt)){
            if(min > el.main.temp_min){
                min = el.main.temp_min
            }
            if(max < el.main.temp_max){
                max = el.main.temp_max
            }
        }
    })
    // now I have min and max for each day
    if(operation === 'create') {
        let min_temp = document.createElement('div')
        let text = document.createTextNode(`Minimum temperature: ${convertKelvinToCelsius(min)}`)
        min_temp.appendChild(text)
        min_temp.id = `min_temp${i}`
        min_temp.className = 'hidden'
        document.getElementById(`div${i}`).appendChild(min_temp)
        let max_temp = document.createElement('div')
        text = document.createTextNode(`Maximum temperature: ${convertKelvinToCelsius(max)}`)
        max_temp.appendChild(text)
        max_temp.id = `max_temp${i}`
        max_temp.className = 'hidden'
        document.getElementById(`div${i}`).appendChild(max_temp)
    } else {
        let updatedMin = document.getElementById(`min_temp${i - 1}`)
        let updatedMax = document.getElementById(`max_temp${i - 1}`)
        updatedMin.innerHTML = `Minimum temperature: ${convertKelvinToCelsius(min)}`
        updatedMax.innerHTML = `Maximum temperature: ${convertKelvinToCelsius(max)}`
    }
}

export { appendDate, appendDescription, appendIcon, appendTemp, appendMoreDataToDivs }