1
console.log(hello);                                   
var hello = 'world';     
//var hello;
//console.log(example) // logs undefined
//hello = 'world'

2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test ()
// needle within scope of test() becomes 'magnet'
// console.log(needle) = 'magnet'

3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool'
// print() 
// function print() is defined
// console.log(brendan) = 'super cool'

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken'
// eat();
// console.log(food) = 'chicken'
// food = 'half-chicken';
// console.log(food) = 'half-chicken'
// food = 'gone'

5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var food = 'fish'
// var mean = function()
// mean() is not a function

6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre
// rewind()
// console.log(genre) = undefined
// var genre = 'disco'
// function call rewind()
// genre = 'rock'
// console.log(genre) = 'rock'
// var genre = 'r&b' 
// console.log(genre) = 'r&b'
// console.log(genre) = 'disco'

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo
// learn()
// dojo = 'san jose'
// console.log(dojo) = 'san jose'
// function call learn()
// dojo = 'seattle'
// console.log(dojo) = 'seattle'
// var dojo = 'burbank'
// console.log(dojo) = 'burbank'
// console.log(dojo) = 'san jose'

8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// const dojo
// function makeDojo()
// console.log(makeDojo("Chicago", 65)) = {'name':'Chicago', 'students': '65','hiring': 'true'}
// console.log(makeDojo("Berkeley", 0)) stops because dojo.name is trying to assign a new value to an immutable variable (const).













