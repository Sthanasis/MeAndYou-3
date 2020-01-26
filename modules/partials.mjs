import { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp} from '../modules/forecast.mjs'

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
        document.getElementById('flex-container').appendChild(column)
        appendDate(item, i, 'create','div')
        appendMinTemp(data, i ,'create', 'div')
        appendMaxTemp(data, i ,'create', 'div')
        appendIcon(item, i, 'create', 'div')
        appendDescription(item, i, 'create', 'div')
    })
}

// Update data on divs
function updateDivs(days, data){
    for (let i = 0; i < days.length; i++) {
        appendDate(days, i, 'update','div')
        appendMinTemp(data, i , 'update','div')
        appendMaxTemp(data, i , 'update','div')
        appendIcon(days, i, 'update','div')
        appendDescription(days, i, 'update','div')
    }
}

export { appendHeader, appendDivs, updateDivs }