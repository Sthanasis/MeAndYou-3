import { days } from './data.mjs'
import { appendDate} from './forecast.mjs'

function appendButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Get detail')
    button.appendChild(text)
    button.id = `btn${i}`
    button.className = 'showbtns'
    document.getElementById(div).appendChild(button)
    button.style.marginTop = '1vw'

    applyStyle(button,'LightSeaGreen')
    applyHoverStyle(button, 'LightSeaGreen')

    button.addEventListener('click', ()=> {
    
        let el = document.getElementById(`analytics${i}`)
        let appender = document.getElementById('flex-container')
        appendDate(days[i], i,  'create' , 'appendAnalytics',`header`)
        if(el.style.display === 'none'){
            el.style.display = 'flex';
            appender.style.display = 'none'; 
        } else {
            el.style.display = 'flex';
            appender.style.display = 'none';
        }
        analyticButton(i , `more_Info`)
    
    })
}

function analyticButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Get back')
    button.appendChild(text)
    button.id = `backBtn${i}`
    button.className = 'analyticBtns'
    document.getElementById(div).appendChild(button)
    button.style.marginLeft = '48%'
    
    applyStyle(button, 'LightSeaGreen')

    applyHoverStyle(button, 'LightSeaGreen')

    button.addEventListener('click', ()=> {
    
        let el = document.getElementById('flex-container')
        let appender = document.getElementById(`analytics${i}`)
        let day = document.getElementById(`analyticDay${i}`)
        if(el.style.display === 'none'){
            el.style.display = 'flex';
            appender.style.display = 'none';
        }
        day.remove()
        button.remove()
    })   

}

function applyStyle(button, colour) { 
    button.style.backgroundColor = 'white'
    button.style.border = '2px solid ' + colour
    button.style.borderRadius = '5px'
    button.style.color = colour
    button.style.padding = '5px 10px'
    button.style.textAlign = 'center'
    button.style.textDecoration = 'none'
    button.style.display = 'inline-block'
    button.style.fontSize = '15px'
    button.style.webkitTransitionDuration = '.4s'
    button.style.cursor = 'pointer'
}

function applyHoverStyle(button, colour) {

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = colour
        button.style.color = 'white'
    })

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'white'
        button.style.color = colour
    })
}

export { appendButton, analyticButton }