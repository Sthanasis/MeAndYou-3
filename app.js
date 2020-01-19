import axios from 'axios' 

const button = document.getElementById('submitButton')
let days = []
const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

button.addEventListener("click",()=>{
    callWeatherApi()
})

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



// Working On Div #flex-container 
// ================================================================
// Update data on divs

// create Divs and Append data
function appendDivs(days){
    days.forEach((item, i)=>{
        let column = document.createElement('div')
        column.id = `div${i}`
        document.getElementById('flex-container').appendChild(column)
        appendDate(item, i, 'create')
        appendTemp(item, i, 'create')
        appendIcon(item, i, 'create')
        appendDescription(item, i, 'create')
    })
}
function updateDivs(days){
    const currentDiv = document.getElementById('flex-container')
    for (let i = 1; i < currentDiv.childNodes.length; i++) {
        appendDate(days, i, 'update')
        appendTemp(days, i, 'update')
        appendIcon(days, i, 'update')
        appendDescription(days, i, 'update')
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

function convertToDay(date){
    let myDay = new Date(date.split(' '))
    return weekday[myDay.getDay()]
}

function getTime(date){
    let myTime = date.split(' ')[1]
    return myTime
}
function convertKelvinToCelsius(temp) {
    return  `${Math.round(temp - 273.15)} \u2103`
}

let iconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}