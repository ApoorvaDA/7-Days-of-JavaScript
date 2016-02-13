/*
Task:
You are given NN numbers. Store them in an array and find the second largest number.

Input Format

The first line contains NN, the size of array AA.
The second line contains NN space separated elements of array AA.

Output Format

Output the value of the second largest number in array AA.

Sample Input

5
2 3 6 6 5

Sample Output

5

Useful link : http://www.w3schools.com/jsref/jsref_sort.asp
*/
function processData(myArray) {
    myArray.sort(function(a,b){return a-b});
    
    var first_largest = myArray.pop();
    var length = myArray.length;
    
    for (var i=0; i<length; i++){
        var second_largest = myArray.pop();
        if(second_largest == first_largest){
            continue;
        }   else {
            console.log(second_largest);
            break;
        }
    }
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});