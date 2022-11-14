// Write a program to check whether number is Perfect Square or not

let isSquare = function(n) {
    for (let i = 0;; i++) {
      let product = i * i;
      if (product === n){
         return true;
      }else{
         if (product > n) return false;
      }
    }
  }

  console.log(isSquare(16));


  //Write a program to find SUM and AVERAGE of two numbers

  let nums = [15,22];
  let l = nums.length;
  let Sum = 0;

  for(i =  0; i<nums.length; i++){
    Sum+= nums[i];
    
  }

  console.log("TotalSum:",Sum);

  let Avg = Sum/l

  console.log("Average:",Avg)


  //Write a program to calculate difference of two numbers


  let a = 17;
  let b = 32;

  function diff(){

    if(a>b) {

     return a-b;

    }else{

        return b-a;
    }
  }
  console.log('Difference:',diff());

 // Write a program to Count Number of Digits in a given number

 let  Num = 435221;
 function dcount(Num){
   
    let count = 0;
    
    while(Num>=1){

        Num/= 10;

        count++

    }


    return count;



    }
       console.log("Number of Digits",dcount(Num));

 //Write a Program to Find Largest Element in an Array

 let array = [1,2,4,3,11,14,5,3];
 let Ln = 0;
 for (i=0; i<array.length; i++){
     if (array[i]>Ln) {
         Ln=array[i];
     }
 }
 
 console.log("Largest Element in an Array:",Ln);



 //Write a program to Display Prime Numbers in Array

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
function primeN(array1){

    let array2 = [];

    array1.forEach(element => {

        let factor = 0;

        for(let i = 0; i<=element; i++){

            if ((element%i) === 0){

                factor++;
            }

        }

        if(factor===2){
            array2.push(element)

        }
        
    })

    console.log(array2);
}

console.log(primeN(array1));

//Write a program to Check Character Is a Vowel or Not Using If-Else

function isVowel(x) {  
    
    return /[aeiou]/.test(x); }

let input = '';
while (input.length != 1) {
  input = prompt("Enter a character ");
}
console.log(isVowel(input));


// Write a program to Given Date Month and the Year Is Correct or Not Using If-Else

function isValidDate(date) {
    let temp = date.split('/');
    let d = new Date(temp[2] + '/' + temp[0] + '/' + temp[1]);
    return (d && (d.getMonth() + 1) == temp[0] && d.getDate() == Number(temp[1]) && d.getFullYear() == Number(temp[2]));
}

console.log(isValidDate('06/2/2022'));

//Write a program to Reverse a Number Using While Loop

let N = 123;
let reverse=0;
let remainder;

while (N>0) {
    remainder = N%10;
    reverse = reverse * 10 + remainder;
    N = Math.floor(N/ 10);
}

console.log(reverse);

//Write a program to Number Is a Palindrome or Not Using While Loop


function Palindrome()
{
    let remainder1;
    let temp;
    let final = 0;
    let number = 123321;

    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }
    if(final==temp)
    {
        console.log("The number is Palindrome");
    }
    else
    {
    console.log("The number is not palindrome");
    }
}

console.log(Palindrome());

//Write a program to find first and last digit of any number 



function firstDigit(n)
{
    while (n >= 10)
        n /= 10;
    return Math.floor(n);
}

function lastDigit(n)
{
    return Math.floor(n % 10);
}
     let n = 1234
    console.log("Sum:",firstDigit(n) + lastDigit(n));

//Write a program to find maximum and minimum using functions
let x = {10,20}

function getminMax(num) {
    return Math.max.apply(num,x);
  }



