function emailValidation() {
  const inputEmail = document.querySelector(".email");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorAlert = document.querySelector(".form__error");
  console.log(errorAlert);

  console.log(inputEmail);
  inputEmail.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value == mailFormat) {
      return "";
    }
  });
}
emailValidation();
