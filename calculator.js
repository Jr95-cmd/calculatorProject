//add function
function add(){
let sum =0; 
for(let i=0;i<arguments.length;i++){
sum+=arguments[i];
};
console.log(total);
};

//subtract function
function subtract() {
    let remainder=arguments[0];
    for (let i=1; i<arguments.length;i++){
        remainder-=arguments[i];
    }
    console.log(remainder);
};

//multiply function, this function converts arguments to an array and uses the reduce method 
function multiply(... args){
    return args.reduce(function (a,b){
        return a*b;
    });
};

//divide function
function divide(... args){
    return args.reduce( function (a,b){
        return a/b;
    });
};