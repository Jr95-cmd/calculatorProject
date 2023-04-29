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
            if(sNum==0 && action=='' && button.id!='c' && actionCount<1){
                p2.textContent='';
                fValue.push(button.id);
                fNum=parseFloat(fValue.join(""));
                
                if(isNaN(fNum)){
                    fNum=0;
                }
                p2.textContent= fNum;       
            } 
           if(button.id=='+'||button.id=='-'||button.id=='*'||button.id=='/'){
                //fn.textContent='';
                
                equation.push(fNum);
                action.push(button.id);
                equation.push(action[actionCount]);
                //actionCount+=1;
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                p2.textContent='0';
                
            }
            
                
          else if(fNum!=null  && action.length>=1){

                sValue.push(button.id);
                sNum=parseFloat(sValue.join(""));
                p2.textContent=sNum;
                p3.textContent='';
                
            }
            //actionCount+=1;
            
            //execute calculation if equal function is selected 
            if (button.id=='=' && sNum>0){
                equation.push(sNum);
                if(action[actionCount]=='+'){
                    actionFn=add;
                }
                 
                if(action[actionCount]=='-'){
                 actionFn=subtract;
                }
 
                 if(action[actionCount]=='*'){
                     actionFn=multiply;
                 }
 
                 if(action[actionCount]=='/'){
                     actionFn=divide;
                 }
                ans= actionFn(fNum,sNum);
                if (ans==Infinity){
                    alert("cannot be divided by 0")
                    button.id='c';
                  
                }
                if (ans-Math.floor(ans)!=0){
                    parseFloat(ans.toFixed(2));
                    fNum=parseFloat(ans.toFixed(2));
                    console.log(fNum);
                }
                else{
                    fNum=ans;
                }
                p3.textContent=fNum;
                sValue=[];
                displayEquation=equation.join(" ");
                console.log(displayEquation);
                fn.textContent=displayEquation;
                //reset calculation variables 
                equation=[];
                p2.textContent='';
                action.shift();
               
            }
            //execute calculation if operation function is selected more than once 
            if (action.length>1){
                
                equation.push(fNum);
                
                
                if(action[actionCount]=='+'){
                    
                    actionFn=add;
                }
                 
                if(action[actionCount]=='-'){
                 actionFn=subtract;
                }
 
                 if(action[actionCount]=='*'){
                     actionFn=multiply;
                 }
 
                 if(action[actionCount]=='/'){
                     actionFn=divide;
                 }
                 

                 //call function and update calculation variables.
                ans= actionFn(fNum,sNum);
                //checks if variable has decimal values
                if (ans-Math.floor(ans!=0)){
                    ans.toFixed(2);
                    //console.log(ans);
                }
                
                p3.textContent=ans;
                equation=[];
                fNum=parseFloat(ans);
                //update equation 
                equation.push(fNum);
                //reset second number array
                sValue=[];
                
                equation.push(action[1]);
                //display results
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                p2.textContent='0';
                p3.textContent='';
                action.shift();
                //add code to update p2 dom  to answer value when executed    
            }
            //add code for 'c' button
            if(button.id=='c'){
                 fValue=[];
                 fNum=0;
                 sValue=[];
                 sNum=0;
                 action=[];
                 ans=0;
                 actionFn='';
                 equation=[];
                 displayEquation='';
                 actionCount=0;
                 p2.textContent='0';
                p3.textContent='';
                 fn.textContent='';

            }
        })
       
    });
