const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const errorMsg = document.querySelector(".errorMsg");
    const emailPattern = /^[\w]+@[\w]+\.[a-z]{2,5}$/;

    
    if(emailInput.value === ""){
        errorMsg.textContent = "Email address field cannot be empty";
        errorMsg.style.display = "block";
        emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
        errorMsg.style.color = "hsl(354, 100%, 66%)";
    }
    else if(!emailInput.value.match(emailPattern)){
        errorMsg.style.display = "block";
        errorMsg.style.color = "hsl(354, 100%, 66%)";
        emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
        errorMsg.textContent = "Please provide a valid email address";
    }
    else {
        errorMsg.textContent = "Email address is a valid one!";
        errorMsg.style.color = "green"
        errorMsg.style.display = "block";
        emailInput.style.border = "1px solid green";
        
    }
})
