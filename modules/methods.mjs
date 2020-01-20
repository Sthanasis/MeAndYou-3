import { appendDate, appendDescription, appendIcon, appendTemp } from '../modules/data.mjs'

const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

// Working On Div #flex-container 
// ================================================================
// Update data on divs

// Create Divs to display data
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

// Update data on divs
function updateDivs(days){
    const currentDiv = document.getElementById('flex-container')
    for (let i = 1; i < currentDiv.childNodes.length; i++) {
        appendDate(days, i, 'update')
        appendTemp(days, i, 'update')
        appendIcon(days, i, 'update')
        appendDescription(days, i, 'update')
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

export { convertToDay, getTime, convertKelvinToCelsius , iconUrl , appendDivs, updateDivs }