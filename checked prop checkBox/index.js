document.getElementById("mybtn").onclick = function(){


    const visabtn = document.getElementById("visabtn");
    const mastercard  = document.getElementById("mastecard");
    const paypal = document.getElementById("paypal");


    if(visabtn.checked){
        console.log("You are paying by visa");
    }

    else if(mastercard.checked){
        console.log("You ae paying with a mastercard");
    }

    else if(paypal.checekd){
        console.log("Ypu are paying by paypal");

    }

    else{
        console.log("Ypou must select a payment gateway"); 
    }

}

    
//     if(document.getElementById("mycheckBox").checked){
//             console.log("You are subscribed");
//     }
//     else{
//         console.log("you are NOT subscribed")
//     }
// }



