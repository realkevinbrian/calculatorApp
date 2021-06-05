

//grab the all keys
const allKeys = document.querySelector(".numContainer");
const liveResult = document.getElementById("liveResult");
const displayResult = document.getElementById("displayResult");
//add event listener to all buttons
allKeys.addEventListener("click", triggerKeys);

function triggerKeys (elem){

    //just check for buttons
    if(elem.target.matches("button")){

        //specify the keys
        const key = elem.target;
        const action = key.dataset['action'];

        

        // console.log(action);
        //check if clicked a common key that is not a button
        if(!action){
        
            /*
            ->if the live output content is 0, enter the clicked number
            */
            // console.log(liveResult.textContent);

            if(liveResult.textContent === "0" && displayResult.textContent === "0"){

                // console.log("Both empty");
                liveResult.textContent = key.textContent;

                
            }
            //otherwise append the typed content to the display
            else{

                liveResult.textContent += key.textContent;

                // const previousClicked =
            }

            //if you click on a key, trigger a custom attribute to grab its value as previus clicked
            if(key){

                //create anew attribute
                const prevClickedAttr = document.createAttribute("prevClicked");

                key.setAttribute(prevClickedAttr,key.textContent);

                const prevClick = key.getAttribute("prevClicked");

                console.log(prevClick.textContent);
            }
            
        }

        //otherwise the element have action set 
        else if(action){

            //check if a clicked action is add/minus/divide or multiply

            if(action === "add" ||
            action === "minus" ||
            action === "multiply" ||
            action === "divide"){

                //if you clicked on the operator append the operator sign to live live display: 

                liveResult.textContent += key.textContent;

            }

            //check if user clicked a decimal
            if(action === "decimal"){

                liveResult.textContent += key.textContent;
            }

            //if the user clicks on clear sign
            if(action === "clear"){

                console.log("user clicked " + key.textContent);
            }


            //check if a user clicked on equal operator
            else if(action === "equal"){
                

            }

        }

    }
    


}