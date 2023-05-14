// console.log("Hello !!")

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    input= input.trim()
    let reverse_str =  input.split('').reverse().join('');
//     console.log("Entered str :", input.trim())
//    console.log("reversed str :",reverse_str.trim());
   if(input === reverse_str)
   {
    console.log("This is Palindrome")
   }
   else{
    console.log("this is not a plaindrome")
   }
});
// process.close();

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.rawListeners( name => {
//   console.log(`Hi ${name}`);
// });

// let nam ="njdsfkk"

// function ispalindrome(str)
// {
 

// }

// ispalindrome(nam)