var burbankTemp = [[24,13],[31,17],[29,15],[26,14]];
var sanjoseTemp = [[28,18.3],[24,19],[27,22],[20,16]];
var chicagoTemp = [[26, 13],[29,21],[29,21],[27,12]];
var dallasTemp = [[26,19],[24,21],[28,22],[31,23]]

function vanish(element){
    element.parentElement.remove();
}

function uhoh() {
    alert("Loading weather report...");
}

// get all values of .temps; convert them to fahrenheit; replace .temps values in the HTML
function convertTemp(){
    var z = document.getElementById('tempSel')
    if( z.value == "Celsius"){
        for(var i = 0; i < sanjoseTemp.length; i++) { // goes through each value in sanjoseTemp
            for(var x = 0; x <= 1; x++){ // goes through the 2 values high and low temps
                if(x == 0){
                    document.getElementById(`high${i}`).innerText = Math.trunc(sanjoseTemp[i][x]);
                }
    
                else if (x == 1){
                    document.getElementById(`low${i}`).innerText = Math.trunc(sanjoseTemp[i][x]);
                }
            }
        }
    }
    else if(z.value == "Fahrenheit"){
        for(var i = 0; i < sanjoseTemp.length; i++) { // goes through each value in sanjoseTemp
            for(var x = 0; x <= 1; x++){ // goes through the 2 values high and low temps
                if(x == 0){
                    document.getElementById(`high${i}`).innerText = Math.trunc(((sanjoseTemp[i][x]*9/5)+32));
                }
    
                else if (x == 1){
                    document.getElementById(`low${i}`).innerText = Math.trunc(((sanjoseTemp[i][x]*9/5)+32));
                }
            } 
        } 
    }
}

