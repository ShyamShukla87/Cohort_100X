const array =[1,2,3,4,5];

function filtering(n){
    if(n%2===0){
        return 1;
    }
    else {
        return 0;
    }
}

console.log(array.filter(filtering));
