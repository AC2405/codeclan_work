// Functions Practice! 

// Complete each question by console logging the result of the function
// Think about what your functions and variable names should be called. Maybe try re using the function with different variables to make sure you've got it right.
// Remember to comment out previous answers so variable names dont clash!




// 1. Create a function that can take a string as an argument, and will return the length of the string
// Eg. Takes in "CodeClan" as an argument and returns 8

// var string = "codeclan"

// function lengthOfaString(name){
//     var lengthOfstring = name.length 
//     return lengthOfstring
// }

// var lengthOf = lengthOfaString(string)
// console.log(lengthOf);

// 2. Create a function that can take 3 strings as an argument and will return the total length of all 3 strings
// Eg. Takes in "Code", "Clan", "Glasgow" and returns 15

// var string = "clan"
// var string2 = "code"
// var string3 = "glasgow"
// function lengthOfaString(name, name2, name3){
//     var lengthOfstring = name.length + name2.length + name3.length
//     return lengthOfstring
// }

// var lengthOf = lengthOfaString(string, string2, string3)
// console.log(lengthOf);



// 3. Create a function that takes in a string and returns the string in upper case 
// Eg. Takes in "CodeClan" and returns "CODECLAN"

// var string = "codeclan"

// function lengthOfaString(name){
//     var lengthOfstring = name.toUpperCase()
//     return lengthOfstring
// }
// console.log(lengthOfaString(string));

// 4. Create a function that takes in a string and returns the string in lower case 
// Eg. Takes in "CodeClan" and returns "codeclan"

// var string = "CodeClan"

// function lengthOfaString(name){
//     var lengthOfstring = name.toLowerCase()
//     return lengthOfstring
// }
// console.log(lengthOfaString(string));


// 5. Create a function that takes in a string and returns the first letter (Strings can work like arrays!)
// Eg. Takes in "CodeClan" and returns "C"


// var string = "CodeClan"

// function lengthOfaString(name){
//     var lengthOfstring = name.charAt(0)
//     return lengthOfstring
// }
// console.log(lengthOfaString(string));



// 6. Create a function that will take in a string and return the first 3 letters of the string
// Eg. Takes in "CodeClan" and returns "Cod"


// var string = "CodeClan"

// function lengthOfaString(name){
//     var lengthOfstring = name.substring(0, 3)
//     return lengthOfstring
// }
// console.log(lengthOfaString(string));



// 7. Create a function that will take in 2 strings, one for a name and one for a height, and 
//return them in a sentence saying for example "Hi John, you are 5'11".

// function lengthOf2Strings(string1, string2){
//     var strings = "Hi " + string1 + " you are " + string2
//     return strings
// }
// console.log(lengthOf2Strings("john", "5'11"));



// Extension Questions (Try google!)


// 8. Create a function that takes in a string and returns it as an array 
// Eg. It takes in "CodeClan" and returns ["C", "o", "d", "e", "C", "l", "a", "n"]
// let string = 'codelan'
//  split_string = string.split("");
// console.log(split_string);


// 9. Create a function that takes a string as an argument, and returns it in reverse
// Eg "CodeClan" will return as "nlaCedoC"

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString("codeclan"))

// 10. Create a function that will take in 3 strings and return the longest
// Eg. "I", "enjoy", "code" will return "enjoy"

function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["I", "enjoy", "code"]));



