document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()
    const form = document.getElementById("form")
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    console.log(pass)
    
    const user = "rayatrj36@gmail.com";
    const userPass = "123456"
    if(regex.test(email) === false){
        alert("Enter valid email")
    }else if (pass.length < 6){
        alert("Password must be greater than 6 digit")
    }else{
        if(email !== user){
            alert("Provide valid information")
        }else if(pass !== userPass){
            alert("Password is wrong")
        }
        else{
            window.location.href ="./dashboard.html"
            alert("Logged in successfully")
        }
    }

    form.reset()
    
})