import { appendDate, appendDescription, appendIcon, appendMinTemp, appendMaxTemp} from './forecast.mjs'
import { appendButton, appendSearchBtn } from './buttons.mjs'
import { changeColor } from './methods.mjs'

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
        header.style.marginTop = '.4em'
        header.style.fontSize = '200%'
        header.style.fontFamily = 'cursive'
        changeColor(header, 'white')
        appendSearchBtn()

    } else {
        let header = document.getElementById(`header`)
        header.innerHTML = `${data.city.name}, ${data.city.country}`
        document.getElementById('searchAgainBtn').disabled = false;
    }
}

// Working On Div #flex-container 
// ================================================================
// Create Divs to display data
function appendDivs(days, data){
    days.forEach((item, i)=>{
        let column = document.createElement('ul')
        column.style.listStyleType = 'none'
        column.id = `ul${i}`
        column.className = 'columns'
        document.getElementById('flex-container').appendChild(column)
        column.style.margin = '1.2em 0'
        appendDate(item, i, 'create', 'appendDivs',`ul${i}`)
        appendMinTemp(data, i ,'create', `ul${i}`)
        appendMaxTemp(data, i ,'create', `ul${i}`)
        appendIcon(item, i, 'create', 'appendDivs', `ul${i}`)
        appendDescription(item, i, 'create','appendDivs', `ul${i}`)
        let btnDiv = document.createElement('div')
        btnDiv.id = `btnDiv${i}`
        document.getElementById('flex-container').appendChild(btnDiv)
        appendButton(i , `ul${i}`)
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
        let detailButtons = document.getElementsByClassName('showbtns')
        for(let i = 0; i<5; i++){
            detailButtons[i].disabled = false;
        }
    }
}

export { appendHeader, appendDivs, updateDivs }