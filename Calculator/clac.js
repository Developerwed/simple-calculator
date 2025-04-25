let resultField = document.getElementById("result");
// function to appened value to the input filed
function appendValue(value) {
    resultField.value += value;
}

// function to clear the input filed
function clearResult(){
    resultField.value = "";
}

// function to calculate the result
function calculateResult(){
    try{
        resultField.value = eval(resultField.value)
    }
    catch(error){
        alert("Inavlid Expression");
        clearResult();
    }
}