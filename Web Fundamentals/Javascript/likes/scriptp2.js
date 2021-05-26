// initial values
var arr = [9, 12, 9];
// function to add likes to values within array.  console logs array.  displays new like total.
function addLikes(userId){
    arr[userId]++;
    document.getElementById("user"+userId).innerHTML = `${arr[userId]} Likes`;
}