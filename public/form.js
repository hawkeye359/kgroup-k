function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return(true);
  }else{
    return(false);
  }
}
const invalidEmail = document.querySelector(".invalid-email");
const emailInput = document.querySelector("#email-input");
emailInput.addEventListener("input", ()=>{
  if(!ValidateEmail(emailInput.value)){
    if(!emailInput.classList.contains("is-danger")){
      emailInput.classList.add("is-danger");
      invalidEmail.style.display = "block";
    }
  }
  else{
    if(emailInput.classList.contains("is-danger")){
      emailInput.classList.remove("is-danger");
      invalidEmail.style.display = "none";
    }
  }
});