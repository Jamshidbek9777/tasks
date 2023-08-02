const forms = document.forms;
// console.log(forms);

let passwordInput = forms.psvl.password;
let message= document.querySelector("#message");
let veryWeak = document.querySelector(".very-weak");
let weak = document.querySelector(".weak");
let moderate = document.querySelector(".moderate");
let strong = document.querySelector(".strong");
let indicator  = document.querySelector(".indicator")

const inputValidation = (value) => {
  if(value.length==0){
    return {message: "", color: ""}
  }
  else if (value.length == 1|| value.length==2 || value.length==3) {
    return { message: "very weak", color: "red", width: "60px" , padding:"180px"};
  } else if (value.length == 4|| value.length==5) {
    return { message: "weak", color: "yellow", width: "120px", };
  } else if (value.length ==6 || value.length==7) {
    return { message: "moderate", color: "brown", width: "180px" };
  } else if (value.length >=8) {
    return { message: "strong", color: "green", width: "240px" };
  }
};

passwordInput.addEventListener("input", ({ target: { value } }) => {
  message.innerText = inputValidation(value).message;
  indicator.style.backgroundColor = inputValidation(value).color;
  indicator.style.width=inputValidation(value).width
  indicator.style.marginRight=inputValidation(value).margin
  // indicator.style.marginLeft=inputValidation(value).marginL
});
