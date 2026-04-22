// Feature Toggle 

function pageToggle (id){
    document.getElementById("main-section").classList.add("hidden")
    document.getElementById("add-money-form-section").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden")

}


document.getElementById("add-money-btn").addEventListener("click", function(){
    pageToggle('add-money-form-section')
})
document.getElementById("home-btn").addEventListener("click", function(){
    pageToggle('main-section')
})


// Add Money 

document.getElementById("add-money-form-btn").addEventListener("click", function(event){
    event.preventDefault()
    const bank = document.getElementById('bank-name').value
    const accountNumber = document.getElementById('account-number').value
    const amount = document.getElementById('amount').value
    const pin = document.getElementById('pin-number').value

    const currentBalance = parseInt(document.getElementById("current-balance").innerText)
    const userAmount = parseInt(amount)




    if (bank == "Select Bank"){
        alert("You did not select any Bank")
        return;
    }else if (accountNumber.length  < 11){
        alert("Plz provide more than 11 digit")
        
    }else if(amount < 1 ){
        alert("Plz add more than 1 money")
    }else if (pin != "1234"){
        alert("Pin is invalid")
    }else{

        const totalBalance = currentBalance + userAmount
        document.getElementById("current-balance").innerText = totalBalance
      
    }
})