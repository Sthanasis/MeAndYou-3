import { convertToDay, convertKelvinToCelsius } from '../modules/methods.mjs'
import { days } from './data.mjs'

function appendMin(data ,i , operation){
    let min = data[0].main.temp_min
    let currentDay = convertToDay(days[i].dt_txt)
    data.forEach((item)=>{
        if(currentDay === convertToDay(item.dt_txt)){
            if(min > item.main.temp_min){
                min = item.main.temp_min
            }
        }
    })
    // now I have min for each day
    if(operation === 'create') {
        let min_temp = document.createElement('div')
        let text = document.createTextNode(`${convertKelvinToCelsius(min)} - `)
        min_temp.appendChild(text)
        min_temp.id = `min_temp${i}`
        min_temp.className = 'hidden'
        document.getElementById(`div${i}`).appendChild(min_temp)
    } else{
        let updatedMin = document.getElementById(`min_temp${i}`)
        updatedMin.innerHTML = `${convertKelvinToCelsius(min)} - `
    }
}

function appendMax(data, i, operation){
    let max = 0
    let currentDay = convertToDay(days[i].dt_txt)
    data.forEach((item) => {
        if(currentDay === convertToDay(item.dt_txt)){
            if(max < item.main.temp_max){
                max = item.main.temp_max
            }
        }
    })
    // now I have max for each day
    if(operation === 'create') {
        let max_temp = document.createElement('div')
        let text = document.createTextNode( ` - ${convertKelvinToCelsius(max)}`)
        max_temp.appendChild(text)
        max_temp.id = `max_temp${i}`
        max_temp.className = 'hidden'
        document.getElementById(`div${i}`).appendChild(max_temp)
    } else {
        console.log(max)
        let updatedMax = document.getElementById(`max_temp${i}`)
        updatedMax.innerHTML = ` - ${convertKelvinToCelsius(max)}`
    }
}
export {appendMin , appendMax}