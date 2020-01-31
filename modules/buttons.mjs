import {days} from './data.mjs'
import { appendDate} from './forecast.mjs'

function appendButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Get detail')
    button.appendChild(text)
    button.id = `btn${i}`
    button.className = 'showbtns'
    document.getElementById(div).appendChild(button)
    button.style.marginTop = '1vw'

    button.addEventListener('click', ()=> {
    
        let el = document.getElementById(`analytics${i}`)
        // let day = document.getElementById(`analyticDay${i}`)
        let appender = document.getElementById('flex-container')
        appendDate(days[i], i,  'create' , 'appendAnalytics',`header`)
        console.log(days)
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
export { appendButton, analyticButton }