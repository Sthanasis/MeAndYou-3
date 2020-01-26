import { convertToDay, getTime } from '../modules/methods.mjs'
import { appendTemp } from '../modules/forecast.mjs'


function appendSth(days, data){
    days.forEach((day, i) => {
        let column = document.createElement('div')
        column.id = `analytics${i}`
        document.getElementById('more_Info').appendChild(column)
        let currentDay = convertToDay(day.dt_txt)
        data.forEach(item => {
            if (currentDay === convertToDay(item.dt_txt)){
                appendTemp(item , i , 'create', 'analytics')
            }
        });
    })
}


export { appendSth }