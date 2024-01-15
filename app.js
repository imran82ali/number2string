console.log("Hello Console")

let amount=Number(prompt("Enter amount"));

let num_string=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",
                "Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Ninteen"];

let num_tens=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Nighty"];

let text_amount="";
console.log(amount)
//Just converting number of thousands
if (amount < 1000000) {
        let thousand = Math.floor(amount/1000);
        amount = amount- thousand * 1000 ;
        if (thousand > 0 ) {
            text(thousand);
            // console.log(" Thousand ") 
            text_amount = text_amount + " Thousand, "
        }
}

// converting from 1 to 999
if (amount < 1000) {
    text(amount);
    // console.log(" Rupees ")
    text_amount = text_amount + " Rupees "
}

// function to write in text
function text(amount){
    // for number >100 to <999
    if ( amount > 99 ) {
        let hundred = Math.floor(amount/100);
        amount = amount- hundred * 100 ;
        // console.log(num_string[hundred] + " Hundred ");
        text_amount = text_amount + num_string[hundred] + " Hundred ";
    }
    // for number >20 to <99
    if (amount > 20) {
        let tens = Math.floor(amount/10);
        // console.log(num_tens[tens]);
        text_amount = text_amount + num_tens[tens] + " ";
        amount = amount- tens * 10 ;
        // console.log(num_string[amount]);
        text_amount = text_amount + num_string[amount];
    }
    // for number <20
    else if (amount < 20) {
        // console.log(num_string[amount]);
        text_amount = text_amount + num_string[amount];
    }
}

console.log(text_amount)