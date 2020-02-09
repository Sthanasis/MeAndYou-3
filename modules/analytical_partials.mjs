import { convertToDay, changeStyle, applyClassName} from './methods.mjs'
import { appendTemp, appendTime, appendFeelsLikeTemp, appendIcon, appendDescription } from './forecast.mjs'


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
                
                column.appendChild(analyticsDiv)
                changeStyle(analyticsDiv.id, 'float', 'left')
                changeStyle(analyticsDiv.id, 'margin', '0')
                
                let ul = document.createElement('ul')
                ul.id = `analyticUl${count}`
                
                analyticsDiv.appendChild(ul)
                changeStyle(ul.id, 'listStyleType', 'none')
                changeStyle(ul.id, 'float', 'left')

                appendTime(item , count , 'create', `analyticUl${count}`)
                appendIcon(item , count , 'create', 'appendAnalytics', `analyticUl${count}`)
                appendDescription(item, count , 'create' ,'appednAnalytics', `analyticUl${count}`)
                appendTemp(item , count , 'create', `analyticUl${count}`)
                appendFeelsLikeTemp(item, count, 'create', `analyticUl${count}`)
                count++
            }
            
        })
    })
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