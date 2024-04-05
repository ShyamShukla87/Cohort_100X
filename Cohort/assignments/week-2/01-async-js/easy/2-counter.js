let count =1;
function timer(){
    setTimeout(() => {
        console.log(count);
        count++;
        timer();
    }, 1000);
}
timer();