let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

setInterval(() => {
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }
    if(minutes==60){
        minutes = 0;
        hours++;
    }
    if(hours==24){
        hours = 0;
    }
    newHours = hours %12;
    let PM = false;
    if(hours>=12){
        PM = true;
    }
    console.log(`${newHours}:${minutes}:${seconds} ${PM ? 'PM' : 'AM'}`);
},1000); 