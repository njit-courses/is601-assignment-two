let form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let outputMessage = document.getElementById("outputString");
    let subtotal = document.getElementById("subtotal").value;
    let tippercent = document.getElementById("tippercent").value;
    console.log("the subtotal string is " + subtotal);
    console.log("the tippercent string is " + tippercent);

    outputMessage.innerText = "The total amount to be paid including the tip is: " + getBillTotal(subtotal, tippercent); 


})


function getBillTotal(subtotal, percentage) {

    console.log("the subtotal in the function is " + subtotal);

    let actualTipAmount = (percentage/100) * subtotal;

    console.log("the actualTipAmount is " + actualTipAmount);

    return (+subtotal + +actualTipAmount);
    
}

