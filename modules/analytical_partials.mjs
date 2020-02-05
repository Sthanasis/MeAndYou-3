import { convertToDay } from './methods.mjs'
import { appendTemp, appendTime, appendFeelsLikeTemp, appendIcon, appendDescription, appendDate } from './forecast.mjs'


function appendAnalytics(days, data){
    let count = 0
    
    days.forEach((day, i) => {

        let column = document.createElement('div')
        column.id = `analytics${i}`
        column.className = 'analytics'
        document.getElementById('more_Info').appendChild(column)
        let currentDay = convertToDay(day.dt_txt)

        data.forEach(item => {
            if (currentDay === convertToDay(item.dt_txt)){
                let analyticsDiv = document.createElement('div')
                analyticsDiv.id = `analyticsDiv${count}`
                analyticsDiv.className = 'analyticsDiv'
                column.appendChild(analyticsDiv)
                analyticsDiv.style.float = 'left'
                analyticsDiv.style.margin = '0'
                analyticsDiv.style.paddingRight = '3vw'
                let ul = document.createElement('ul')
                ul.id = `analyticUl${count}`
                ul.className = 'analyticUls'
                analyticsDiv.appendChild(ul)
                ul.style.listStyleType = 'none'
                ul.style.float = 'left'
                appendTime(item , count , 'create', `analyticUl${count}`)
                appendIcon(item , count , 'create', 'appendAnalytics', `analyticUl${count}`)
                appendDescription(item, count , 'create' ,'appednAnalytics', `analyticUl${count}`)
                appendTemp(item , count , 'create', `analyticUl${count}`)
                appendFeelsLikeTemp(item, count, 'create', `analyticUl${count}`)
                count++
            }

        })
    })

    let lastDiv = document.getElementById(`analyticsDiv${count - 1}`)
    lastDiv.style.border = 'none'
}

function updateAnalytics(days, data) {
    let count = 0
    
    for(let i = 0; i < days.length; i++){
        
        let currentDay = convertToDay(days[i].dt_txt)
        
        data.forEach(item => {
            
            if (currentDay === convertToDay(item.dt_txt)){
                appendTime(item , count , 'update')
                appendIcon(item , count , 'update' , 'updateAnalytics')
                appendDescription(item, count , 'update', 'updateAnalytics')
                appendTemp(item , count , 'update')
                appendFeelsLikeTemp(item , count, 'update')
                count++
            }
            
        })
    }
}


export { appendAnalytics, updateAnalytics }