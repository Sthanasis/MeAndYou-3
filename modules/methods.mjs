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

export { convertToDay, getTime, convertKelvinToCelsius , iconUrl }