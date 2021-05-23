


conTotal = 312;

function vanish1(element) {
    let temp = document.getElementById("conTotalreq").childElementCount;
    element.parentElement.remove();
    temp--;
    document.getElementById("conReqbut").innerText = `${temp}`;
    if (temp == 0){
        document.getElementById("fas").remove();
    }
}

function vanish2(element) {
    
    let temp = document.getElementById("conTotalreq").childElementCount;
    element.parentElement.remove();
    temp--;
    document.getElementById("conReqbut").innerText = `${temp}`;
    conTotal++;
    document.getElementById("butCon").innerText = conTotal;
    if (temp == 0){
        document.getElementById("fas").remove();
    }
}


function changeName(){
    document.getElementById("cardName").innerText = 'Carmen San Diego';
}

