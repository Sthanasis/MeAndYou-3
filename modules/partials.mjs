import { appendDate, appendDescription, appendIcon, appendTemp, appendMoreDataToDivs } from '../modules/forecast.mjs'

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
function appendDivs(days, moreData){
    days.forEach((item, i)=>{
        let column = document.createElement('div')
        column.id = `div${i}`
        document.getElementById('flex-container').appendChild(column)
        appendDate(item, i, 'create')
        appendTemp(item, i, 'create')
        appendIcon(item, i, 'create')
        appendDescription(item, i, 'create')
        appendMoreDataToDivs(item, i, 'create', moreData)
    })
}

// Update data on divs
function updateDivs(days, moreData){
    const currentDiv = document.getElementById('flex-container')
    for (let i = 1; i < currentDiv.childNodes.length; i++) {
        appendDate(days, i, 'update')
        appendTemp(days, i, 'update')
        appendIcon(days, i, 'update')
        appendDescription(days, i, 'update')
        appendMoreDataToDivs(days[i - 1], i, 'update', moreData)
    }
}




export { appendHeader, appendDivs, updateDivs }