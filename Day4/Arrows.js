/*
Task

You are given a variable, my_function. Your task is to assign it with an arrow function. 
The my_function should take an array as its parameter and return an array with all its even elements incremented by 11, 
and odd elements decremented by 11.

*/
// write the correct arrow function here
var my_function = (some_array) => some_array.map(num => (num % 2 === 0) ? ++num : --num ) ;