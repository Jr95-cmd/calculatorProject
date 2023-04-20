//add function
function add(){
    let sum =0; 
    for(let i=0;i<arguments.length;i++){
    sum+=arguments[i];
    };
    return sum;
    };
    
    //subtract function
    function subtract() {
        let remainder=arguments[0];
        for (let i=1; i<arguments.length;i++){
            remainder-=arguments[i];
        }
        return remainder;
    };
    
    //multiply function, this function converts arguments to an array and uses the reduce method 
    function multiply(... args){
        let product=args.reduce(function (a,b){
            return a*b;
        });
        return product;
    };
    
    //divide function
    function divide(... args){
        let quotient= args.reduce( function (a,b){
            return a/b;
        });
        return quotient;
    };

    //operation

    function operate(operation,...args){
        let result=operation(...args);
        return result; 
    }


//define global variables
let fValue=[];
let fNum=0;
let sValue=[];
let sNum=0;
let action=[];
let ans=0;
let actionFn='';
let equation=[];
let displayEquation='';
let actionCount=0;



    //dom 
    const btn=document.querySelectorAll('button');
    btn.forEach((button) =>{
        button.addEventListener('click',() =>{
            let fn= document.querySelector('#operation');
            let p= document.querySelector('#num1');
            let p2= document.querySelector('#num2');
            let p3= document.querySelector('#result')
            if(sNum==0 && action==''){
                p3.textContent='';
                fValue.push(button.id);
                fNum=parseFloat(fValue.join(""));
                console.log(fNum);
                p2.textContent= fNum;        
            } 
           if(button.id=='+'||button.id=='-'||button.id=='*'||button.id=='/'){
               fn.textContent='';
                equation.push(fNum);
                console.log(equation);
                action.push(button.id);
                console.log(action[actionCount]);
                equation.push(action[actionCount]);
                actionCount+=1;
                console.log(equation);
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                p2.textContent='';
            }
                
          else if(fNum!=null  && action.length>=1){

                sValue.push(button.id);
                sNum=parseFloat(sValue.join(""));
                console.log(sNum);
                p2.textContent=sNum;
                equation.push(sNum);
                
            }
            //execute calculation if equal function is selected 
            if (button.id=='='){
                if(action[0]=='+'){
                    actionFn=add;
                }
                 
                if(action[0]=='-'){
                 actionFn=subtract;
                }
 
                 if(action[0]=='*'){
                     actionFn=multiply;
                 }
 
                 if(action[0]=='/'){
                     actionFn=divide;
                 }
                ans= actionFn(fNum,sNum);
                console.log(ans);
                //update values and display results
                p3.textContent=ans;
                equation=[];
                fNum=ans;
                equation.push(fNum);
                console.log(equation);
                sValue=[];
                action.shift();
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                //reset calculation variables 
                p3.textContent='';
                p2.textContent='';
                equation.shift();
                actionCount=0;
               
            }
            //execute calculation if operation function is selected more than once 
            if (action.length>1){
                if(action[0]=='+'){
                    actionFn=add;
                }
                 
                if(action[0]=='-'){
                 actionFn=subtract;
                }
 
                 if(action[0]=='*'){
                     actionFn=multiply;
                 }
 
                 if(action[0]=='/'){
                     actionFn=divide;
                 }
                 //call function and update calculation variables.
                ans= actionFn(fNum,sNum);
                console.log(ans);
                p3.textContent=ans;
                equation=[];
                fNum=ans;
                //update equation 
                equation.push(fNum);
                console.log(equation);
                //reset second number array
                sValue=[];
                action.shift();
                equation.push(action[0]);
                //display results
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                p3.textContent='';
                p2.textContent='';
                //add code to update p2 dom  to answer value when executed    
            }
            //add code for 'c' button
        })
       
    });