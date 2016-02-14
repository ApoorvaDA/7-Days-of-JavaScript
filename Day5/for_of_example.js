/*
Task

We have created an array my_array whose elements are strings. Your task is to print the elements which are palindromes.

Constraints

0 ≤ size of array ≤ 100
0 ≤ size of each string ≤ 100
*/
//Write your code below this line.
function reverse(s){
    return s.split("").reverse().join("");
}

for(var i of my_array){
    if(i == reverse(i)){
        console.log(i);
    }
}