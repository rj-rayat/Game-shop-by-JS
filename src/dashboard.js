// Feature Toggle 

function pageToggle (id){
    document.getElementById("main-section").classList.add("hidden")
    document.getElementById("add-money-form-section").classList.add("hidden")
    document.getElementById("history-section").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden")

}

function activeBtn (id){
    document.getElementById("home-btn").classList.remove("btn-primary")
    document.getElementById("history-btn").classList.remove("btn-primary")
    document.getElementById(id).classList.add("btn-primary")
}

document.getElementById("add-money-btn").addEventListener("click", function(){
    pageToggle('add-money-form-section')
})
document.getElementById("home-btn").addEventListener("click", function(){
    pageToggle('main-section')
    activeBtn("home-btn")
})
document.getElementById("history-btn").addEventListener("click", function(){
    pageToggle('history-section')
    activeBtn("history-btn")
})

function popUp (){
    document.getElementById("my_modal_3").showModal()
}


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

        const historySection = document.getElementById("history-section")
     

        const date = new Date()
        const localDate = date.toString

        const div = document.createElement("div")
        div.classList.add("shadow-lg")
        div.classList.add("rounded-xl")
        div.classList.add("rounded-xl")
        div.classList.add("p-2.5")
        div.classList.add("border")
        div.classList.add("border-warning")
        div.classList.add("mt-2")
        div.classList.add("border-outline")

        

        const p = document.createElement("p")
        p.innerText = `${userAmount} tk added at ${date}`
        div.appendChild(p)

        
        historySection.appendChild(div)
       

        popUp()
        document.getElementById("modal-heading").innerText = "Money Added Successfully"
      
    }
})


// Free Fire Button Buy Feature

document.getElementById("free-fire-button").addEventListener("click", function(){
   const currentBalance = parseInt(document.getElementById("current-balance").innerText)
   const freeFirePrice = parseInt(document.getElementById("free-fire-price").innerText)
   if( currentBalance <= 0 ){

    popUp()
    
    document.getElementById("modal-heading").innerText = "Don't have enough money"
    return;
   }else if(freeFirePrice > currentBalance){
    popUp()
    document.getElementById("modal-heading").innerText = "You dont have enough money"
   }else{
     const totalBalance = currentBalance - freeFirePrice
     document.getElementById("current-balance").innerText = totalBalance
     popUp()
     document.getElementById("modal-heading").innerText = "Hurray, Enjoy this game"
     const btn = document.getElementById("free-fire-button")
     btn.setAttribute("disabled", true)
     btn.innerText = "Booked"

     const freeFireHeading = document.getElementById("free-fire-heading").innerText
     const historySection = document.getElementById("history-section")
    

        const date = new Date()
        const localDate = date.toString()

        const div = document.createElement("div")
        div.classList.add("shadow-lg")
        div.classList.add("rounded-xl")
        div.classList.add("rounded-xl")
        div.classList.add("p-2.5")
        div.classList.add("border")
        div.classList.add("border-warning")
        div.classList.add("mt-2")
        div.classList.add("border-outline")

        

        const p = document.createElement("p")
        p.innerText = `You buyed this ${freeFireHeading} Game at cost ${freeFirePrice} at ${localDate}`
        div.appendChild(p)

    
        historySection.appendChild(div)
       

   }
})