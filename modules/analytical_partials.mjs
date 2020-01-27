import { convertToDay } from './methods.mjs'
import { appendTemp, appendTime, appendFeelsLikeTemp, appendIcon, appendDescription } from './forecast.mjs'

function appendAnalytics(days, data){
    let count = 0
    days.forEach((day, i) => {
        let column = document.createElement('div')
        column.id = `analytics${i}`
        document.getElementById('more_Info').appendChild(column)
        let currentDay = convertToDay(day.dt_txt)
        data.forEach(item => {
            if (currentDay === convertToDay(item.dt_txt)){
                appendTime(item , count , 'create', `analytics${i}`)
                appendTemp(item , count , 'create', `analytics${i}`)
                appendFeelsLikeTemp(item, count, 'create', `analytics${i}`)
                appendIcon(item , count , 'create', 'appendAnalytics', `analytics${i}`)
                appendDescription(item, count , 'create' ,'appednAnalytics', `analytics${i}`)
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
                appendTemp(item , count , 'update')
                appendFeelsLikeTemp(item , count, 'update')
                appendIcon(item , count , 'update' , 'updateAnalytics')
                appendDescription(item, count , 'update', 'updateAnalytics')
                count++
            }
        })
    }
}


export { appendAnalytics, updateAnalytics }