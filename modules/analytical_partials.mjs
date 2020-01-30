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
                let ul = document.createElement('ul')
                ul.style.listStyleType = 'none'
                ul.style.float = 'left'
                ul.style.borderRight = ' 1px solid grey'
                ul.id = `analyticUl${count}`
                ul.className = 'analyticUls'
                document.getElementById(`analytics${i}`).appendChild(ul)
                appendTime(item , count , 'create', `analyticUl${count}`)
                appendIcon(item , count , 'create', 'appendAnalytics', `analyticUl${count}`)
                appendDescription(item, count , 'create' ,'appednAnalytics', `analyticUl${count}`)
                appendTemp(item , count , 'create', `analyticUl${count}`)
                appendFeelsLikeTemp(item, count, 'create', `analyticUl${count}`)
                count++
            }
            if (currentDay !== convertToDay(item.dt_txt)){
                let lastUl = document.getElementById(`analyticUl${count - 1}`)
                lastUl.style.border = 'none'
            }
        })
        analyticButton(i , `analytics${i}`)
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