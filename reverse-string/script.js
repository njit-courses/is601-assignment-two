let form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let outputMessage = document.getElementById("outputString");
    let inputString = document.getElementById("userInput").value;
    console.log("the input string is " + inputString);

    let reversedString = "";
    for (let index = inputString.length - 1; index >= 0; index--) {
        reversedString += inputString[index]
    }

    outputMessage.innerText = "The reversed string is " + reversedString;
    console.log("the reversed string is " + reversedString);
    

  
})