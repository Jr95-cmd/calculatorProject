//add function
function add(){
    let sum =0; 
    for(let i=0;i<arguments.length;i++){
    sum+=arguments[i];
    };
    console.log(sum);
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

    //operation

    function operate(operation,...args){
        let result=operation(...args);
        return result; 
    }
//define variables
let fValue=[];
let fNum=0;
let sValue=[];
let sNum=0;
let action='';
let ans=0;
    //dom 
    const btn=document.querySelectorAll('button');
    btn.forEach((button) =>{
        button.addEventListener('click',() =>{
            if(sNum==0 && action==''){
                fValue.push(button.id);
                fNum=parseFloat(fValue.join(""));
                console.log(fNum);
            } 
           if(button.id=='+'||button.id=='-'||button.id=='*'||button.id=='/'){
                action=button.id;
                console.log(button.id);
            }
                
          else if(fNum!=null  && action!=''){

                sValue.push(button.id);
                sNum=parseFloat(sValue.join(""));
                console.log(sNum);
            }
                //execute calculation
            if (button.id=='='){
                if(action=='+'){
                    action=add;
                }
                 
                if(action=='-'){
                 action=subtract;
                }
 
                 if(action=='*'){
                     action=multiply;
                 }
 
                 if(action=='/'){
                     action=divide;
                 }
                ans= operate(action,fNum,sNum);
                return ans;
            }
        })
       
    });