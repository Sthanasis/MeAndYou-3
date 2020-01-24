import { appendDate, appendDescription, appendIcon, appendTemp } from '../modules/forecast.mjs'
import { appendMin, appendMax } from '../modules/analytical_forecast.mjs'

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

// Working On Div #flex-container 
// ================================================================
// Update data on divs

// Create Divs to display data
function appendDivs(days, data){
    days.forEach((item, i)=>{
        let column = document.createElement('div')
        column.id = `div${i}`
        document.getElementById('flex-container').appendChild(column)
        appendDate(item, i, 'create')
        appendTemp(item, i, 'create')
        appendIcon(item, i, 'create')
        appendDescription(item, i, 'create')
        appendMin(data, i ,'create')
        appendMax(data, i ,'create')
    })
}

// Update data on divs
function updateDivs(days, data){
    for (let i = 0; i < days.length; i++) {
        appendDate(days, i, 'update')
        appendTemp(days, i, 'update')
        appendIcon(days, i, 'update')
        appendDescription(days, i, 'update')
        appendMin(data, i , 'update')
        appendMax(data, i , 'update')
    }
}


export { appendHeader, appendDivs, updateDivs }