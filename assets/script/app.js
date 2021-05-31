
/**
 *
 * Developed and mantained by kevin Brian
    Design by Kevin
    contact : 
    email : realkevinbrian@gmail.com
    whatsapp : +258 85 5874201
 *
 */



//listen for all keypresses 
const keys = document.querySelector(".numContainer");
// const displayResult = document.getElementById("displayResult");

keys.addEventListener("click", elem =>{

    //determine the type of key that is pressed
    if(elem.target.matches("button")){
        
        //we can use the data-action attribute to determine the type of key that is clicked.
        const key = elem.target;
        const action = key.dataset.action;

        //get value inside the display: 
        const displayLive = document.getElementById("liveResult");
        const displayResult = document.getElementById("displayResult");

        const previousClicked  =  keys.dataset.previousClicked;


        //remove the active class form all keys
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove("active"));


        //If the key does not have a data-action attribute, it must be a number key.
        if(!action){
            

        //-if the calculator shows 0 (the default number), the target number should replace zero.
        if(displayLive.textContent === "0"){

            displayLive.textContent = key.textContent;


        }
        //If the calculator shows a non-zero number, the target number should be appended to the displayed number.
        else if(displayLive.textContent !== "0" ||previousClicked === "operator"){

            displayLive.textContent += `${key.textContent}`;

            


            

        }

        
            }


        //If the key has a data-action that is either add, subtract, multiply or divide, we know the key is an operator.
        if(action === 'add' ||
           action === 'multiply' ||
           action === 'minus' ||
           action === 'divide'){

            // add a class to make it active when the operator keys are clicked
            key.classList.add("active");

            //we gonna have to add this custom attribute data-previous-key-type and set it to operator value;
            keys.dataset.previousClicked = "operator";

            //display the live result in the display
            displayLive.textContent += key.textContent;

            //add a custom attribute to set it
            keys.dataset.operator = action;
            keys.dataset.firstValue = displayLive.textContent;



            }


            //initialize a function that calculates number

            const calculate = (arg1,operator,arg2) =>{

                let result = '';

               switch(operator){

                case "add":
                    result = parseFloat(arg1) + parseFloat(arg2);
                    break;
                case "minus":
                    result = parseFloat(arg1) - parseFloat(arg2);
                    break;

                case "divide":
                    result = parseFloat(arg1) / parseFloat(arg2);
                    break;
                
                case "multiply":
                    result = parseFloat(arg1) * parseFloat(arg2);
                    break;
                        
               }

               return result;
            }

            


            

        //If the key has a data-action that is decimal , clear , equal 

        if(action === 'decimal' ||
        action === 'clear' ||
        action === 'equal'){

            //-When you hit the decimal key, a decimal should appear on the display. If you hit any number after hitting a decimal key, the number should be appended on the display as well.

            if(action === "decimal"){

                displayLive.textContent += "."
                
            }

            if(action === "equal"){
                
                //grab the operator -> we set a custom attribute
                const operator = keys.dataset.operator;

                //grab the first and second Value -> we set a custom attribute
                const secondValue = displayLive.textContent;
                const firstValue = keys.dataset.firstValue;

               


                displayResult.textContent = calculate(firstValue,operator,secondValue);

                console.log(secondValue);
            // console.log(secondValue);
            }

            
        }

      
    }
})