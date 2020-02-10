import { days } from './data.mjs'
import { appendDate} from './forecast.mjs'
import { changeStyle } from './methods.mjs'

// Refactor append code to createButton(id, innerText, className) method
// Refactor createEventListener() method
function appendButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Detail')
    button.appendChild(text)
    button.id = `btn${i}`
    button.className = 'showbtns btns'

    document.getElementById(div).appendChild(button)
    changeStyle(button.id, 'margin','1.2em')

    applyStyle(button,'LightSeaGreen')
    applyHoverStyle(button, 'LightSeaGreen')

    button.addEventListener('click', ()=> {

        let el = document.getElementById(`analytics${i}`)
        let appender = document.getElementById('flex-container')
        let btn = document.getElementById('searchAgainBtn')
        appendDate(days[i], i,  'create' , 'appendAnalytics',`title`)
        if(el.style.display === 'none'){
            changeStyle(el.id, 'display', 'flex')
            changeStyle(appender.id, 'display', 'none')
            changeStyle(btn.id, 'display', 'none')

        } else {

            changeStyle(el.id, 'display', 'flex')
            changeStyle(appender.id, 'display', 'none')
            changeStyle(btn.id, 'display', 'none')
        }
        analyticButton(i , `more_Info`)

        changeStyle('more_Info', 'opacity', '1')
    })
}

function analyticButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Back')
    button.appendChild(text)
    button.id = `backBtn${i}`
    document.getElementById(div).appendChild(button)
    changeStyle(button.id, 'marginBottom', '1.2em')
  
    applyStyle(button, 'LightSeaGreen')

    applyHoverStyle(button, 'LightSeaGreen')

    button.addEventListener('click', ()=> {
        
        let el = document.getElementById('flex-container')

        let appender = document.getElementById(`analytics${i}`)

        let day = document.getElementById(`analyticDay${i}`)

        let btn = document.getElementById('searchAgainBtn')

        if(el.style.display === 'none'){

            changeStyle(el.id, 'display', 'flex')
            changeStyle(appender.id, 'display', 'none')
            changeStyle(btn.id, 'display', 'block')

        }

        day.remove()
        button.remove()
    })   

}

function applyStyle(button, colour) { 
    button.style.backgroundColor = 'white'
    button.style.border = '2px solid ' + colour
    button.style.borderRadius = '.4em'
    button.style.color = colour
    button.style.padding = '.4em .6em'
    button.style.textAlign = 'center'
    button.style.textDecoration = 'none'
    button.style.display = 'inline-block'
    button.style.fontSize = '1em'
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

function appendSearchBtn() {

    let button = document.createElement('button')
    let textbtn = document.createTextNode('Search again')
    button.id = 'searchAgainBtn'
    button.className = 'btns'
    button.style.float = 'right'
    button.style.marginRight = '10%'
    
    applyStyle(button, 'grey')
    applyHoverStyle(button, 'grey')
    button.appendChild(textbtn)
    document.getElementById('title').appendChild(button)
    
    button.addEventListener('click', ()=>{

        let container = document.getElementById('container')
        changeStyle(container.id, 'opacity', '0')

        let submit = document.getElementById('submit')
        changeStyle(submit.id, 'opacity', '1')

        let background = document.getElementById('background')
        changeStyle(background.id, 'filter', 'none')

        let detailButtons = document.getElementsByClassName('showbtns')
        for(let i = 0; i<5; i++){
            detailButtons[i].disabled = true;
        }
        
        let submitBtn = document.getElementById('submitButton');
        submitBtn.disabled = false;
        applyStyle(button, 'grey')

        button.disabled = true;

        setTimeout(()=>{
            let btns = document.getElementsByClassName('btns');
            for (let i = 0; i < btns.length; i++){
                changeStyle(btns[i].id, 'display','none')
            }
        },1800)
    })
}

export { appendButton, analyticButton, appendSearchBtn }