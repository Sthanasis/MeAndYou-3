import axios from 'axios' 
import { appendDivs, appendHeader, updateDivs } from './partials.mjs'
import { convertToDay , getTime, fadeOut, applyClassName, changeStyle } from './methods.mjs'
import { appendAnalytics, updateAnalytics } from './analytical_partials.mjs' 

let days = []

function callWeatherApi(){
    let query = document.getElementById('cityInput').value.trim()
    if(query) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=196d16292a50e2189701f534273cad52`)
        .then(response => {
            if(days.length === 0){
                
                fadeOut('submit', '0', '2s')

                document.getElementById('cityInput').value = null;
                
                changeStyle('container','backgroundColor','rgba(0,0,0, 0.5)');
                changeStyle('container','opacity', '1');

                changeStyle('flex-container', 'opacity', '1');

                changeStyle('title', 'opacity','1')

                createDataObject(response.data)
                appendHeader(response.data, 'create')
                appendDivs(days, response.data.list)
                appendAnalytics(days, response.data.list)

                applyClassName('background', 'background');
                changeStyle('background','filter','blur(8px)')
                
            } else {
                
                createDataObject(response.data)
                appendHeader(response.data, 'update')
                updateDivs(days, response.data.list)
                updateAnalytics(days, response.data.list)

                fadeOut('submit', '0', '2s')

                document.getElementById('cityInput').value = null;
                
                changeStyle('container','backgroundColor','rgba(0,0,0, 0.5)');
                changeStyle('container','opacity', '1');

                changeStyle('flex-container', 'opacity', '1');
                
                changeStyle('title', 'opacity','1')

                applyClassName('background', 'background');
                changeStyle('background','filter','blur(8px)')
                
            }
        }) 
        .catch((err)=> {

            alert(err);
            
            document.getElementById('cityInput').value = null;

        })                   
    } else{
        alert('Please insert a city Name')
    }
}

// create object from API call to get Data
function createDataObject(data){
    days = []
    let currentDay = null
    let currentTime = getTime(data.list[0].dt_txt)

    data.list.forEach((el)=>{

        let convertedDate = convertToDay(el.dt_txt)

        if( currentDay !== convertedDate && currentTime === getTime(el.dt_txt) ){
            currentDay = convertedDate 
            days.push(el)
        }

    })
    if(days.length === 6){
        days.pop(5)
    }
}

export { callWeatherApi, days }