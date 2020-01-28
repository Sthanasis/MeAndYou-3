function appendButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Get detail')
    button.appendChild(text)
    button.id = `btn${i}`
    button.className = 'showbtns'
    document.getElementById(div).appendChild(button)
    button.addEventListener('click', ()=> {
    
        let el = document.getElementById(`analytics${i}`)
        // let day = document.getElementById(`analyticDay${i}`)
        let appender = document.getElementById('flex-container')
        console.log('hi')
        if(el.style.display === ''){
            el.style.display = 'flex';
            appender.style.display = 'none';
            
        } else {
            el.style.display = 'flex';
            appender.style.display = 'none';
        }
    
    })
}

function analyticButton(i, div) {
    let button = document.createElement('button')
    let text = document.createTextNode('Get back')
    button.appendChild(text)
    button.id = `backBtn${i}`
    button.className = 'analyticBtns'
    document.getElementById(div).appendChild(button)
    button.addEventListener('click', ()=> {
    
        let el = document.getElementById('flex-container')
        let appender = document.getElementById(`analytics${i}`)
        console.log(el)
        if(el.style.display === 'none'){
            el.style.display = 'flex';
            appender.style.display = 'none';
        }
    })   

}
export { appendButton, analyticButton }