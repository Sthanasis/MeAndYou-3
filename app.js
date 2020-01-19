import axios from 'axios' 

const button = document.getElementById('submitButton')
let days = []
const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

button.addEventListener("click",()=>{
    getTemperature()
})

function getTemperature(){
    let query = document.getElementById('cityInput').value.trim()
    if(query) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=196d16292a50e2189701f534273cad52`)
        .then(response => {
            createDataObject(response.data)
            appendDivs(days)
        }) 
        .catch(()=>alert('Please insert a valid city'))                   
    } else{
        alert('Please insert a city Name')
    }
}


function createDataObject(data){
    days = []
    let currentDay = null
    let currentTime = getTime(data.list[0].dt_txt)
    data.list.forEach((el)=>{
        let convertedDate = convertToDay(el.dt_txt)
        if(currentDay !== convertedDate && currentTime === getTime(el.dt_txt) ){
            currentDay = convertedDate
            days.push(el)
        }
    })
    if(days.length === 6){
        days.pop(5)
    }
    // 
    console.log(days)
}

function convertToDay(date){
    let myDay = new Date(date.split(' '))
    return weekday[myDay.getDay()]
}

function getTime(date){
    let myTime = date.split(' ')[1]
    return myTime
}

function appendDivs(days){
    days.forEach((item)=>{
        let day = document.createElement('div')
        let text = document.createTextNode(convertToDay(item.dt_txt))
        day.appendChild(text)
        day.id = day.innerHTML
        document.getElementById('flex-container').appendChild(day)
    })
}