const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";


function convertToDay(date){
    let myDay = new Date(date.split(' '))
    return weekday[myDay.getDay()]
}

function getTime(date){
    let myTime = date.split(' ')[1]
    return myTime
}
function convertKelvinToCelsius(temp) {
    return  `${Math.round(temp - 273.15)} \u2103`
}

let iconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

function changeColor(item, color) {
    item.style.color = color
}

function fadeOut(targetId, opacityValue, transitionValue){
    let item = document.getElementById(targetId).style
    item.opacity = opacityValue;
    item.transition = transitionValue;
    return item;
}

function applyClassName(id, className){

    return document.getElementById(id).className = className; 
}

function changeStyle(id, styleProperty, value){

    return document.getElementById(id).style[styleProperty] = value;
}

export { convertToDay, getTime, convertKelvinToCelsius , iconUrl, changeColor, fadeOut, applyClassName, changeStyle }