function emailValidation() {
  let form = document.forms["early_acces_request"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let error = document.querySelector(".form__error");
    const email = form[0].value;
    let validRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-] +)*$/;

    if (email.match(validRegex)) {
      alert("Email sent !!");
      error.style.opacity = "0";
    } else {
      alert("This is not a email adress");
      error.style.opacity = "1";
    }
  });
}
emailValidation();
