let form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let outputMessage = document.getElementById("outputString");
    let inputNumber = document.getElementById("userInput").value;
    console.log("the input string is " + inputNumber);

   if (isNumberPalindrome(inputNumber)) {
        outputMessage.innerText = "Number is a palindrome"; 
   } else {
        outputMessage.innerText = "Number is not a palindrome";
   }


})

function isNumberPalindrome(digits) {

    console.log("the input number in the function is " + digits);

    reversedDigits = 0;
    digitCounter = 0;

    while ( Math.floor(digits / (Math.pow(10, digitCounter)))  != 0) {
        reversedDigits = (reversedDigits * 10) + ( Math.floor(digits / (Math.pow(10, digitCounter))) % 10)
        digitCounter += 1
    }

    console.log("palindrome check " + (digits == reversedDigits));

    return (digits == reversedDigits)
    
}

