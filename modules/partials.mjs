import { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp} from './forecast.mjs'
import { appendButton } from './buttons.mjs'

// Working On Div #title 
// ===============================================================
// Display City name and Country code
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

// Create Divs to display data
function appendDivs(days, data){
    days.forEach((item, i)=>{
        let column = document.createElement('div')
        column.id = `div${i}`
        column.className = 'columns'
        document.getElementById('flex-container').appendChild(column)
        appendDate(item, i, 'create', 'appendDivs',`div${i}`)
        appendMinTemp(data, i ,'create', `div${i}`)
        appendMaxTemp(data, i ,'create', `div${i}`)
        appendIcon(item, i, 'create', 'appendDivs', `div${i}`)
        appendDescription(item, i, 'create','appendDivs', `div${i}`)
        let btnDiv = document.createElement('div')
        btnDiv.id = `btnDiv${i}`
        document.getElementById('flex-container').appendChild(btnDiv)
        appendButton(i , `div${i}`)
    })
}

// Update data on divs
function updateDivs(days, data){
    for (let i = 0; i < days.length; i++) {
        appendDate(days[i], i, 'update','updateDivs')
        appendMinTemp(data, i , 'update')
        appendMaxTemp(data, i , 'update')
        appendIcon(days[i], i,  'update', 'updateDivs')
        appendDescription(days[i], i, 'update','updateDivs')
    }
}

export { appendHeader, appendDivs, updateDivs }