var burbankTemp = [[24,13],[31,17],[29,15],[26,14]];
var sanjoseTemp = [[23.9,18.3],[23.9,18.3],[23.9,18.3],[23.9,18.3]];
var chicagoTemp = [[26, 13],[29,21],[29,21],[27,12]];
var dallasTemp = [[26,19],[24,21],[28,22],[31,23]]

function vanish(element){
    element.parentElement.remove();
}

function uhoh() {
    alert("Loading weather report...");
}

// get all values of .temps; convert them to fahrenheit; replace .temps values in the HTML
function convertCtoF(){
    var x = document.querySelectorAll(".temps");
    for( var i = 0; i<x.length;i++){
        x[i] = (x[i] * 9/5)+32;
        x[i].querySelectorAll(".temps").innerText = x[i]
    }
    console.log(x);
}

