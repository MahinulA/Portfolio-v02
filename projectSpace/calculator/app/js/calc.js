// CALCULATOR SIZE RESPONSIVENESS
(function (){
    // GET ABSOLUTE POSITIONED CALCULATOR OFFSET HEIGHT
    // SET ITS CONTAINER HEIGHT EXACTLY AS OFFSET HEIGHT
    let elemeentHeight =document.querySelector(".calc-item-cetering").offsetHeight;
    document.querySelector(".calculator-container").style.height = elemeentHeight + "px";
})();


// ICON SWITCH
(function(){
    let emojiContainer =document.querySelector(".emojis-js");
    emojiContainer.addEventListener("mouseenter", ()=>{
        emojiContainer.innerHTML= `<i class="fa-solid fa-face-laugh-squint"></i>`;
    });
    emojiContainer.addEventListener("mouseleave", ()=>{
        emojiContainer.innerHTML= `<i class="fa-solid fa-face-smile-beam"></i>`;
    });
})();



// CALCULATOR FUNCTIONALITIES
//PUT INPUT NUMBER IN DISPLAY
//WHEN OPERATION CLICKED PUT THAT NUMBER IN 

//STORE INFORMATION IN SEQUEL OBJECT
//PLAY WITH OBEJCT ONE AND OBJECT TWO
//WHEN OPERATION BUTTON CLICKED STORE INFO IN OBJECT ONE WITH OPERATION KEY
//AGAIN OPERATION BUTTON CLICKED TRASFER OB-1 INFO TO OB-2, STORE NEW DATA IN OB-1, THE DO CALCULATION
//STORE RESULT AND AFTER OP-BTN IN OB-1 AND SAME PROCEDURE
(function(){
    let buttonEventInit = document.getElementsByClassName("numbers-btn");
    let numberInit;
    let number;
    let OperationResult;


    // MATHMATICAL OPERATION FUNCTION
    let matmatiCalFunc = (firstValue, OpSign, secondValue) =>{
        if(OpSign == "+"){
            // do add operation
            OperationResult = firstValue + secondValue;
            console.log(firstValue + "+ " + secondValue);
            return OperationResult;
        }else if(OpSign == "-"){
            // do minus operation
            OperationResult = firstValue - secondValue;
            console.log(firstValue + "-" + secondValue);
            return OperationResult;
        }else if(OpSign == "*"){
            // do into operation
            OperationResult = firstValue * secondValue;
            console.log(firstValue + "*" + secondValue);
            return OperationResult;
        }
        else if(OpSign == "/"){
            // do divide operation
            OperationResult = firstValue / secondValue;
            console.log(firstValue + "/" + secondValue);
            return OperationResult;
        }
        else if(OpSign == "%"){
            let percentageDecimal = secondValue/100;

        }
    }

    for(i=0; i < buttonEventInit.length; i++){
        let buttonEvent = buttonEventInit[i]; 
        buttonEvent.addEventListener("click", ()=>{
            // console.log("number button works");
            let inputNumber = buttonEvent.textContent;
            document.querySelector(".result-container").innerHTML =` <span class="js-result-after"></span>`; //removing result 
            document.querySelector(".show-sign-container").innerHTML =` <span class="js-showsign-after"></span>`; //removing sign after first input
            // console.log(inputNumber);
            document.querySelector(".js-input-after").textContent = ""; //remove default 0
            document.querySelector(".js-input-after").insertAdjacentText("beforebegin", inputNumber); //start putting numbers
            
            
           
            numberInit = document.querySelector(".input-container").textContent;
            numberInit =numberInit.trim();
            number = Number(numberInit); //working :FINAL NUMBER OUTPUT
            // console.log(numberInit);
        });
    }

    
    let operationBTNInit=document.getElementsByClassName("js-operation-btn");
    
    let ObjectOne = new Object();
    for(i =0; i < operationBTNInit.length; i++){
        let operationBTN = operationBTNInit[i];
        operationBTN.addEventListener("click", ()=>{
            // console.log("operation button working");
            document.querySelector(".result-container").innerHTML =` <span class="js-result-after"></span>`; //removing result 
            // let numberInit = document.querySelector(".display-section").textContent;
            numberInit =numberInit.trim();

            let OpetatorSign = operationBTN.textContent;  //UPDATE: storing operation sign
  

            // STORING INFO IN OBJECT
            //IF FIRST OBJECT IS UNIDENTIFIED THEN STORE IT IN FIRST OBEJCT
            //OR DO CALCULATION AND STORE THE RESULT IN FIRST OBEJCT
            if(ObjectOne.number == undefined){
                // console.log("second object undefined");
                ObjectOne.number = number;
                ObjectOne.signOp = OpetatorSign;

                document.querySelector(".input-container").innerHTML = `<span class="js-input-after"></span>`; //removing the input number
                document.querySelector(".js-showsign-after").insertAdjacentText("beforebegin", OpetatorSign); //showing operator sign in display

                // console.log(ObjectOne);
            }else if(ObjectOne.number != undefined){
                // console.log("second phase working");


                // show result since he clicked another math operation
                let result = matmatiCalFunc(ObjectOne.number, ObjectOne.signOp, number);
                ObjectOne.number= result;
                ObjectOne.signOp = OpetatorSign;

                document.querySelector(".input-container").innerHTML = `<span class="js-input-after"></span>`; //removing the input number
                //document.querySelector(".js-result-after").insertAdjacentText("beforebegin", result); //show result
                document.querySelector(".js-showsign-after").insertAdjacentText("beforebegin", OpetatorSign); //showing operator sign in display
            }

        });
    }

    document.querySelector(".eq-btn").addEventListener("click", ()=>{
        // console.log(ObjectOne.number + " " + ObjectOne.signOp);
        // IF THERE IS NO FIRST OBJECT THE SHOW THE FIRST OBJECT NUMBER AS RESULT
        // THEN STORE FIRST NUMBER TO THE VARIABLE "number" 
        // OTHEWISE DO CALCULATIONS 
        // THEN STORE NUMBER IN "number"
        if(ObjectOne.number ==undefined){
            // ANYONE CLICKS EQUAL MULTIPLE TIMES
            console.log("do something");

            setTimeout(()=>{
                document.querySelector(".js-result-after").insertAdjacentText("beforebegin", numberInit); //show result
            }, 400);
        }else if(ObjectOne.number !=undefined){
            let x = ObjectOne.number;
            let s = ObjectOne.signOp;
            let result = matmatiCalFunc(x, s, number);
            // console.log(result);
            // document.querySelector(".display-section").innerHTML = result + `<span class="text-container-display"></span>`;
            document.querySelector(".input-container").innerHTML = `<span class="js-input-after"></span>`; //removing the input number
            document.querySelector(".js-result-after").insertAdjacentText("beforebegin", result); //show result
        }
    });



    // RESET FUNCTIONALITY
    const ResetFunction = () =>{
        document.querySelector(".input-container").innerHTML = `<span class="js-input-after">0</span>`; //removing the input number
        document.querySelector(".result-container").innerHTML =` <span class="js-result-after"></span>`; //removing result 
        document.querySelector(".show-sign-container").innerHTML =` <span class="js-showsign-after"></span>`; //removing any sign 
        ObjectOne.number = undefined;
        ObjectOne.signOp= "";
        numberInit = "";
        number ="";
    }
    document.querySelector(".reset-btn-js").addEventListener("click", ()=>{
        ResetFunction();
    });

    // IF I CLICK THE PERCENTAGE BUTTON
    let percentageButton =document.querySelector(".percentage-btn");
    percentageButton.addEventListener("click", ()=>{
        let InputContainerInnerHTML = document.querySelector('.input-container').innerHTML;
        InputContainerInnerHTML = InputContainerInnerHTML.trim();
        console.log(InputContainerInnerHTML);
        let percentageText =percentageButton.textContent;
        console.log(percentageText);
        undefinedInput = (InputContainerInnerHTML == '<span class="js-input-after">0</span>'  || InputContainerInnerHTML == '<span class="js-input-after"></span>' || InputContainerInnerHTML == '<span class="js-input-after"> </span>' );
        console.log(undefinedInput);
        if(undefinedInput == true){
            ResetFunction();
        }
        else if(undefinedInput == false){
            // number GET
            // var matches = str.match(/(\d+)/);
            //DO CALCULATION AND STORE IT IN number variable
            inputNumber = number/100;
            console.log(inputNumber);
            document.querySelector(".input-container").innerHTML = `<span class="js-input-after"></span>`; //removing the input number
            setTimeout(()=>{
                document.querySelector(".js-input-after").insertAdjacentText("beforebegin", inputNumber); //start putting numbers
                numberInit = document.querySelector(".input-container").textContent;
                numberInit =numberInit.trim();
                number = Number(numberInit);
            }, 100)
        }
    });


    
})();