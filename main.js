function emailValidation() {
  const inputEmail = document.querySelector(".email");
  const mailformat = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  const errorAlert = document.querySelector(".form__error");
  console.log(errorAlert);

  console.log(inputEmail);
  inputEmail.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value.match.mailFormat) {
      return "";
    } else {
      errorAlert.style.opacity = "1";
    }
  });
}
emailValidation();
