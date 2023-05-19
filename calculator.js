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
let sNum=null;
let action=[];
let ans=0;
let actionFn='';
let equation=[];
let displayEquation='';
let actionCount = 0;




//code to trigger keyboard inputs
document.addEventListener('keydown',(event)=>{
    let key = event.key;
    console.log(key);
    const defineBts = document.getElementsByTagName('button');

    if (key == 'b' || key == 'Backspace') {
        key ='B';
    }

    if (key == 'Enter') {
        key = '=';
    }


   //read on this 
    const ids = Array.prototype.map.call(defineBts, function (a) {
        return a.getAttribute('id');
    })
    console.log(ids);

    if (ids.indexOf(key) > -1) {
        document.getElementById(key).click();
    }
    else {
        console.log('not a button');
    }
})

//disable clear buttons
const actionBtDisable = Array.from(document.getElementsByClassName('actionC'));
for (var i = 0; i < actionBtDisable.length; i++) {
    actionBtDisable[i].disabled = true;
}
const disEq = document.getElementById('=')
disEq.disabled = true;

const functionBtDisable = Array.from(document.getElementsByClassName('action'));
for (var a = 0; a < functionBtDisable.length; a++) {
    functionBtDisable[a].disabled = false;
}

const actionClass = Array.prototype.map.call(functionBtDisable, function (c) {
    return c.getAttribute('class');
})

console.log(actionClass);


    //dom 
    const btn=document.querySelectorAll('button');
    btn.forEach((button) =>{
        button.addEventListener('click',() =>{
            let fn= document.querySelector('#operation');
            let p= document.querySelector('#num1');
            let p2= document.querySelector('#num2');
            let p3 = document.querySelector('#result')
            const disDec = document.getElementById('.');

            if (sNum == null && action == '' && actionClass.indexOf(button.className)!=0) {
                //CHECK HERE
               
                if (button.id == 'B') {
                    fValue.pop();
                    console.log(fValue);
                    if (fValue[0] == null) {
                        
                        fNum = 0;
                        p2.textContent = '0';
                        
                    }
                }
                p2.textContent = '';
                if (button.id == '.') {
                    disDec.disabled = true;
                 }

                console.log(button.id);
                if (button.id!='B') {
                    fValue.push(button.id);
                    console.log(fValue);

                    
                }
                /*if (fValue.length > 1) {
                    for (var i = 0; i < actionBtDisable.length; i++) {
                        actionBtDisable[i].disabled = false;
                    }
                    console.log(fValue.lenght);
                }

                if (fValue.length == 1) {
                    for (var i = 0; i < actionBtDisable.length; i++) {
                        actionBtDisable[i].disabled = true;
                    }
                    console.log(fValue.lenght);
                }*/

                for (var i = 0; i < functionBtDisable.length; i++) {
                    functionBtDisable[i].disabled = false;
                }

                if (fValue[0] != null) {
                    if (fValue.length > 1 && fValue[0] == 0) {
                        fValue.shift();

                    }

                    fNum = fValue.join("");
                    console.log(fNum);
                }
                if(isNaN(fNum)){
                    fNum=0;
                }
                p2.textContent = fNum;
                fNum = Number(fNum);
            }


            if (fNum > 0) {
                for (var i = 0; i < actionBtDisable.length; i++) {
                    actionBtDisable[i].disabled = false;

                }
               
            }


            
            if (actionClass.indexOf(button.className) == 0 &&equation[1]==null){
               disDec.disabled = false;
               disEq.disabled = true;
               
               /*for (var i = 0; i < functionBtDisable.length; i++) {
                   functionBtDisable[i].disabled = false;
               }*/

               p3.textContent = '';
               equation.push(fNum);
                action.push(button.id);
                equation.push(action[actionCount]);
                displayEquation=equation.join(" ");
                fn.textContent=displayEquation;
                p2.textContent='0';

               /*for (var i = 0; i < functionBtDisable.length; i++) {
                   functionBtDisable[i].disabled = false;
               }*/
            }
            
            

            if (fNum != null && equation.length >= 1 && actionClass.indexOf(button.className) != 0 && button.id!='=') {
               
               if (button.id == 'B') {
                   sValue.pop();
                   console.log(sValue);
                   if (sValue[0] == null) {


                       sNum = 0;
                       p2.textContent = '0';

                   }
               }
               
               if (button.id =='.') {
                   disDec.disabled = true;
               }

                if (button.id != 'B') {
                    sValue.push(button.id);

                    console.log(sValue);
                    if (sValue.length > 1 && sValue[0] == 0) {
                        sValue.shift();

                    }
                    sNum = sValue.join("");
                    p2.textContent = sNum;
                    sNum = Number(sNum);

                    p3.textContent = '';
                }
                
               disEq.disabled = false;
               for (var i = 0; i < functionBtDisable.length; i++) {
                   functionBtDisable[i].disabled = false;
               }

              if (sNum > 0) {
                   for (var i = 0; i < actionBtDisable.length; i++) {
                       actionBtDisable[i].disabled = false;

                   }

               }
                
            }
           
            //execute calculation if equal function is selected 
            if (button.id == '=' ){
                equation.push(sNum);
                console.log(equation);
                
                if(equation[1]=='+'){
                    actionFn=add;
                }
                 
                if (equation[1]=='-'){
                 actionFn=subtract;
                }
 
                if (equation[1]=='*'){
                     actionFn=multiply;
                 }
 
                if (equation[1] == '/') {
                    if (sNum == 0) {
                        alert("cannot be divided by 0");
                        sNum = 0;
                        sValue = [];
                        
                        
                        p2.textContent = '0';
                        equation.pop();
                        
                        console.log(equation);
                        
                    }

                     actionFn=divide;
                 }
                
                ans = actionFn(fNum, sNum);
                console.log(ans);
                if (ans==Infinity){
                    //ans = 0;
                    //button.id='c';
                    //document.getElementById('c').click();
                    
                }

                if (ans != Infinity) {
                    if (ans - Math.floor(ans) != 0) {
                        parseFloat(ans.toFixed(2));
                        fNum = parseFloat(ans.toFixed(2));
                        console.log(fNum);
                    }
                    else {
                        fNum = ans;
                    }
                    p3.textContent = fNum;
                    action.shift();
                    p2.textContent = '';
                    sValue = [];
                    displayEquation = equation.join(" ");
                    console.log(displayEquation);
                    fn.textContent = displayEquation;
                    
                }
                //reset calculation variables 
                equation = [];

                //p2.textContent = '';

                disEq.disabled = true;

                for (var i = 0; i < functionBtDisable.length; i++) {
                    functionBtDisable[i].disabled = false;
                }
                   
                    
                
                    
                



            }

            /*if (actionClass.indexOf(button.className) == 0 && equation[1] != null) {
                
                document.getElementById('=').click();
            }*/

            /*
            //execute calculation if operation function is selected more than once
            if (action.length>1){
                
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
 
                if (action[actionCount] == '/') {
                    if (sNum == 0) {
                        console.log(sValue);
                        alert("cannot be divided by 0");
                        sNum = 0;
                        sValue[0] = sNum;
                        p2.textContent = '0';
                    }
                     actionFn=divide;
                 }
                 

                 //call function and update calculation variables.
                ans= actionFn(fNum,sNum);
                //checks if variable has decimal values
                if (ans-Math.floor(ans!=0)){
                    Number(ans).toFixed(2);
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
                p3.textContent='';
                action.shift();
                //add code to update p2 dom  to answer value when executed    
            }
            */

            //in the event two numeric variables have been given and function button is selected
            if (equation.length == 2 && actionClass.indexOf(button.className) == 0) {
               
                    document.getElementById('=').click();
                    

                
               
                    p3.textContent = '';
                
                    p2.textContent = '';
                    sValue = [];
                    equation.pop();
                    equation[1] = button.id;
                    equation[0] = fNum;
                    displayEquation = equation.join(" ");
                    console.log(displayEquation);
                    fn.textContent = displayEquation;
                  
                

            }

            //add code for 'c' button
            if(button.id=='c'){
                 fValue=[];
                 fNum=0;
                 sValue=[];
                 sNum=null;
                 action=[];
                 //ans=0;
                 actionFn='';
                 equation=[];
                 displayEquation='';
                 actionCount=0;
                 p2.textContent=fNum;
                p3.textContent='';
                fn.textContent = '';
                disDec.disabled = false;
                for (var i = 0; i < actionBtDisable.length; i++) {
                    actionBtDisable[i].disabled = true;
                }
                disEq.disabled = true;
            }
        })
       
    });
