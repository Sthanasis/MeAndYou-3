import { convertToDay, convertKelvinToCelsius , iconUrl, getTime } from './methods.mjs'
import { days } from './data.mjs' 


// forecast for partials.mjs
function appendDate(item, i,  operation, method, div){
    if (operation === 'create') {
        if(method === 'appendDivs'){
            let day = document.createElement('li')
            let text = document.createTextNode(convertToDay(item.dt_txt))
            day.id = `day${i}`
            day.className = 'days'
            day.appendChild(text)
            document.getElementById(div).appendChild(day)
            day.style.paddingBottom = '1vw'
        } else {
            let day = document.createElement('h3')
            let text = document.createTextNode(convertToDay(item.dt_txt))
            day.id = `day${i}`
            day.className = 'days'
            day.appendChild(text)
            document.getElementById(div).appendChild(day)
            day.style.paddingBottom = '1vw'
            day.style.margin = '0'
        }
    } else {
        if(method === 'updateDivs'){
            let day = document.getElementById(`day${i}`)
            day.innerHTML = convertToDay(item.dt_txt)
        } else {
            let day = document.getElementById(`analyticDay${i}`)
            day.innerHTML = convertToDay(item.dt_txt)
        }
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
        let min_temp = document.createElement('li')
        let text = document.createTextNode(`${convertKelvinToCelsius(min)}`)
        min_temp.appendChild(text)
        min_temp.id = `min_temp${i}`
        min_temp.className = 'min'
        document.getElementById(div).appendChild(min_temp)
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
        let max_temp = document.getElementById(`min_temp${i}`)
        let text = document.createTextNode( ` - ${convertKelvinToCelsius(max)}`)
        max_temp.appendChild(text)
        max_temp.id = `max_temp${i}`
        max_temp.className = 'max'
        document.getElementById(div).appendChild(max_temp)
    } else {
        let updatedMax = document.getElementById(`max_temp${i}`)
        updatedMax.innerHTML = ` - ${convertKelvinToCelsius(max)}`
    }
}

function appendIcon(item, i , operation, method, div){
    if(operation === 'create'){
        let icon = document.createElement('img')
        icon.src = iconUrl(item.weather[0].icon)
        if(method === 'appendDivs'){
            icon.id = `icon${i}`
            icon.className = 'icons'
        } else {
            icon.id = `analyticIcon${i}`
            icon.className = 'analyticIcons'
        }
        document.getElementById(div).appendChild(icon)
    } else {
        if(method === 'updateDivs'){
            let icon = document.getElementById(`icon${i}`)
            icon.src = iconUrl(item.weather[0].icon)
        } else {
            let icon = document.getElementById(`analyticIcon${i}`)
            icon.src = iconUrl(item.weather[0].icon)
        }
    }
}

function appendDescription(item, i , operation, method, div){
    if(operation === 'create'){
        let description = document.createElement('li')
        let text = document.createTextNode(item.weather[0].description)
        description.appendChild(text)
        if(method === 'appendDivs'){
            description.id = `description${i}`
            description.className = 'descriptions'
        } else {
            description.id = `analyticDescription${i}`
            description.className = 'analyticDescriptions'
        }
        document.getElementById(div).appendChild(description)
    } else {
        if(method === 'updateDivs'){
            let description = document.getElementById(`description${i}`)
            description.innerHTML = item.weather[0].description
        } else {
            let description = document.getElementById(`analyticDescription${i}`)
            description.innerHTML = item.weather[0].description
        }
    }
}

// forecast for analytical_partials.mjs
function appendTemp(item, i,  operation, div){
    if(operation === 'create'){
        let temp = document.createElement('li')
        let text = document.createTextNode(convertKelvinToCelsius(item.main.temp))
        temp.appendChild(text)
        temp.id = `temp${i}`
        temp.className = 'temperatures'
        document.getElementById(div).appendChild(temp)
    } else {
        let temp = document.getElementById(`temp${i}`)
        temp.innerHTML = convertKelvinToCelsius(item.main.temp)
    }
}

function appendTime(item, i , operation , div){
    if (operation === 'create'){
        let time = document.createElement('li')
        let text = document.createTextNode(getTime(item.dt_txt))
        time.appendChild(text)
        time.id = `time${i}`
        time.className = 'time'
        document.getElementById(div).appendChild(time)
    } else {
        let time = document.getElementById(`time${i}`)
        time.innerHTML = getTime(item.dt_txt)
    }
}

function appendFeelsLikeTemp(item, i,  operation, div){
    if(operation === 'create'){
        let temp = document.createElement('li')
        let text = document.createTextNode( ` feelsLike: ${convertKelvinToCelsius(item.main.feels_like)}`)
        temp.appendChild(text)
        temp.id = `feelsLike${i}`
        temp.className = 'feelsLike'
        document.getElementById(div).appendChild(temp)
    } else {
        let temp = document.getElementById(`feelsLike${i}`)
        temp.innerHTML = ` feelsLike: ${convertKelvinToCelsius(item.main.feels_like)}`
    }
}

export { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp, appendTemp, appendTime, appendFeelsLikeTemp }