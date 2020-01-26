import { convertToDay, convertKelvinToCelsius , iconUrl, getTime } from '../modules/methods.mjs'
import { days } from '../modules/data.mjs' 

function appendTemp(item, i,  operation, div){
    if(operation === 'create'){
        let temp = document.createElement('div')
        let text = document.createTextNode(convertKelvinToCelsius(item.main.temp))
        temp.appendChild(text)
        temp.id = `temp${i}`
        temp.className = 'temperatures'
        document.getElementById(`${div}${i}`).appendChild(temp)
    } else {
        let temp = document.getElementById(`temp${i}`)
        temp.innerHTML = convertKelvinToCelsius(item[i].main.temp)
    }
}

function appendMinTemp(data ,i , operation, div){
    let min = data[0].main.temp_min
    let currentDay = convertToDay(days[i].dt_txt)
    data.forEach((item)=>{
        if(currentDay === convertToDay(item.dt_txt)){
            if(min > item.main.temp_min){
                min = item.main.temp_min
            }
        }
    })
    // now I have min for each day
    if(operation === 'create') {
        let min_temp = document.createElement('div')
        let text = document.createTextNode(`${convertKelvinToCelsius(min)}`)
        min_temp.appendChild(text)
        min_temp.id = `min_temp${i}`
        min_temp.className = 'min hidden'
        document.getElementById(`${div}${i}`).appendChild(min_temp)
    } else{
        let updatedMin = document.getElementById(`min_temp${i}`)
        updatedMin.innerHTML = `${convertKelvinToCelsius(min)}`
    }
}

function appendMaxTemp(data, i, operation, div){
    let max = 0
    let currentDay = convertToDay(days[i].dt_txt)
    data.forEach((item) => {
        if(currentDay === convertToDay(item.dt_txt)){
            if(max < item.main.temp_max){
                max = item.main.temp_max
            }
        }
    })
    // now I have max for each day
    if(operation === 'create') {
        let max_temp = document.createElement('div')
        let text = document.createTextNode( ` - ${convertKelvinToCelsius(max)}`)
        max_temp.appendChild(text)
        max_temp.id = `max_temp${i}`
        max_temp.className = 'max hidden'
        document.getElementById(`${div}${i}`).appendChild(max_temp)
    } else {
        let updatedMax = document.getElementById(`max_temp${i}`)
        updatedMax.innerHTML = ` - ${convertKelvinToCelsius(max)}`
    }
}

function appendIcon(item, i , operation, div){
    if(operation === 'create'){
        let icon = document.createElement('img')
        icon.src = iconUrl(item.weather[0].icon)
        icon.id = `icon${i}`
        icon.className = 'icons'
        document.getElementById(`${div}${i}`).appendChild(icon)
    } else {
        let icon = document.getElementById(`icon${i}`)
        icon.src = iconUrl(days[i].weather[0].icon)
    }
}

function appendDescription(item, i , operation, div){
    if(operation === 'create'){
        let description = document.createElement('div')
        let text = document.createTextNode(item.weather[0].description)
        description.appendChild(text)
        description.id = `description${i}`
        description.className = 'descriptions'
        document.getElementById(`${div}${i}`).appendChild(description)
    } else {
        let description = document.getElementById(`description${i}`)
        description.innerHTML = days[i].weather[0].description
    }
}

function appendDate(item, i,  operation, div){
    if (operation === 'create') {
        let day = document.createElement('div')
        let text = document.createTextNode(convertToDay(item.dt_txt))
        day.appendChild(text)
        day.id = `day${i}`
        day.className = 'days'
        document.getElementById(`${div}${i}`).appendChild(day)
    } else {
        let day = document.getElementById(`day${i}`)
        day.innerHTML = convertToDay(days[i].dt_txt)
    }
}


function appendTime(item, i , operation , div){
    if (operation === 'create'){
        let time = document.createElement('div')
        let text = document.createTextNode(getTime(item.dt_txt))
        time.appendChild(text)
        time.id = `time${i}`
        time.className = 'time'
        document.getElementById(`${div}${i}`).appendChild(time)
    } else {
        let time = document.getElementById(`time${i}`)
        time.innerHTML = getTime(item.dt_txt)
    }
}

export { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp, appendTemp, appendTime }