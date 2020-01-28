import { convertToDay } from './methods.mjs'
import { appendTemp, appendTime, appendFeelsLikeTemp, appendIcon, appendDescription, appendDate } from './forecast.mjs'
import {analyticButton} from './buttons.mjs'

function appendAnalytics(days, data){
    let count = 0
    days.forEach((day, i) => {
        let column = document.createElement('div')
        column.id = `analytics${i}`
        column.className = 'analytics'
        document.getElementById('more_Info').appendChild(column)
        appendDate(day, i,  'create' , 'appendAnalytics',`analytics${i}`)
        let currentDay = convertToDay(day.dt_txt)
        data.forEach(item => {
            if (currentDay === convertToDay(item.dt_txt)){
                let div = document.createElement('div')
                div.id = `analyticDiv${count}`
                div.className = 'analyticDivs'
                document.getElementById(`analytics${i}`).appendChild(div)
                appendTime(item , count , 'create', `analyticDiv${count}`)
                appendIcon(item , count , 'create', 'appendAnalytics', `analyticDiv${count}`)
                appendDescription(item, count , 'create' ,'appednAnalytics', `analyticDiv${count}`)
                appendTemp(item , count , 'create', `analyticDiv${count}`)
                appendFeelsLikeTemp(item, count, 'create', `analyticDiv${count}`)
                count++
            }
        })
        let btnDiv = document.createElement('div')
        btnDiv.id = `analyticBtnDiv${i}`
        document.getElementById(`analytics${i}`).appendChild(btnDiv)
        analyticButton(i , `analyticBtnDiv${i}`)
    })
}

function updateAnalytics(days, data) {
    let count = 0
    for(let i = 0; i < days.length; i++){
        let currentDay = convertToDay(days[i].dt_txt)
        appendDate(days[i], i,  'update' , 'updateAnalytics' )
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