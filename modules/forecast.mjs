import { convertToDay, convertKelvinToCelsius , iconUrl, getTime, changeColor } from './methods.mjs'
import { days } from './data.mjs' 


// forecast for partials.mjs || analytical_partials.mjs
function appendDate(item, i,  operation, method, div){
    if (operation === 'create') {
        if(method === 'appendDivs'){
            let day = document.createElement('li')
            let text = document.createTextNode(convertToDay(item.dt_txt))
            day.id = `day${i}`
            day.className = 'days'
            day.appendChild(text)
            document.getElementById(div).appendChild(day)
            day.style.fontFamily = '"Comic Sans MS", cursive, sans-serif'
            day.style.letterSpacing = '.2em';    
            day.style.paddingBottom = '1.2em'
            changeColor(day, '#FFF8DC')
        } else {
            let day = document.createElement('h3')
            let text = document.createTextNode(convertToDay(item.dt_txt))
            day.id = `analyticDay${i}`
            day.appendChild(text)
            day.style.fontFamily = '"Comic Sans MS", cursive, sans-serif'
            day.style.letterSpacing = '.1em';    
            document.getElementById(div).appendChild(day)
            day.style.padding = '1.2em 0'
            day.style.margin = '0'
            changeColor(day, '#FFF8DC')
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

// forecast for partials.mjs
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
        changeColor(min_temp, '#F0F8FF')
        min_temp.id = `min_temp${i}`
        min_temp.className = 'min'
        document.getElementById(div).appendChild(min_temp)
    } else{
        let updatedMin = document.getElementById(`min_temp${i}`)
        updatedMin.innerHTML = `${convertKelvinToCelsius(min)}`
    }
}

// forecast for partials.mjs
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
        let max_temp = document.createElement(`li`)
        let text = document.createTextNode( ` ${convertKelvinToCelsius(max)}`)
        max_temp.appendChild(text)
        changeColor(max_temp, '#FFF8DC')
        max_temp.id = `max_temp${i}`
        max_temp.className = 'max'
        document.getElementById(div).appendChild(max_temp)
    } else {
        let updatedMax = document.getElementById(`max_temp${i}`)
        updatedMax.innerHTML = ` ${convertKelvinToCelsius(max)}`
    }
}

// forecast for partials.mjs || analytical_partials.mjs
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

// forecast for partials.mjs || analytical_partials.mjs
function appendDescription(item, i , operation, method, div){
    if(operation === 'create'){
        let description = document.createElement('li')
        let text = document.createTextNode(item.weather[0].description)
        description.appendChild(text)
        description.style.fontStyle = 'italic'
        changeColor(description , '#FFF8DC')
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
        temp.style.marginTop = '.8em'
        changeColor(temp , '#FFF8DC')
        document.getElementById(div).appendChild(temp)
    } else {
        let temp = document.getElementById(`temp${i}`)
        temp.innerHTML = convertKelvinToCelsius(item.main.temp)
    }
}

// forecast for analytical_partials.mjs
function appendTime(item, i , operation , div){
    if (operation === 'create'){
        let time = document.createElement('li')
        let text = document.createTextNode(getTime(item.dt_txt).slice(0,5))
        time.appendChild(text)
        time.id = `time${i}`
        time.className = 'time'
        document.getElementById(div).appendChild(time)
        time.style.fontFamily = 'monospace';
        
        changeColor(time , '#FFF8DC')
    } else {
        let time = document.getElementById(`time${i}`)
        time.innerHTML = getTime(item.dt_txt).slice(0,5)
    }
}

// forecast for analytical_partials.mjs
function appendFeelsLikeTemp(item, i,  operation, div){
    if(operation === 'create'){
        let temp = document.createElement('li')
        let text = document.createTextNode( `Feels: ${convertKelvinToCelsius(item.main.feels_like)}`)
        temp.appendChild(text)
        temp.style.fontFamily = 'cursive'
        temp.id = `feelsLike${i}`
        temp.className = 'feelsLike'
        document.getElementById(div).appendChild(temp)
        changeColor(temp , '#FFF8DC')
    } else {
        let temp = document.getElementById(`feelsLike${i}`)
        temp.innerHTML = `Feels: ${convertKelvinToCelsius(item.main.feels_like)}`
    }
}

export { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp, appendTemp, appendTime, appendFeelsLikeTemp }