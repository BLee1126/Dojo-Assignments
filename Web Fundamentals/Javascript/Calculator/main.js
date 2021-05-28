var displayNum = "";
var hidNum = 0;
var op = '';
var result = 0;


function press(num){
    displayNum += num;
    document.getElementById("display").innerText = displayNum;
}

function clr() {
    displayNum = "";
    hidNum = 0;
    result = 0;
    document.getElementById("display").innerText = 0;
}

function setOP (opType) {
    // if (hidNum != 0){
    //     hidNum += parseInt(displayNum);
    // }
    op = opType;
    hidNum = parseInt(displayNum);
    displayNum = "";
}

function calculate() {
    var parsedResult = 0;
    displayNum = parseInt(document.getElementById("display").innerText);
    result = eval(hidNum+ op +displayNum);
    if(countDecimals(result) > 3){
        parsedResult = result.toFixed(3);
        document.getElementById("display").innerHTML = parsedResult;
    }
    else {
        document.getElementById("display").innerHTML = result;
    }
    displayNum = "";
    hidNum = 0;
    op = '';
    result = 0;
}

function countDecimals(num) {
    let numStr = String(num);
    if (numStr.includes('.')){
        return numStr.split('.')[1].length;
    }
    return 0;
}

