//Generating 4 digit pin

//Checking if the pin is not 4 digit
function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("Not 3 digit", pin);
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  //display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

//event delegate
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");

    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        //last er value shorabo
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remaininDigits = digits.join("");
        typedNumberField.value = remaininDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumber = typedNumberField.value;

  const pinSuccessMessage = document.getElementById("pin-success");

  const pinFailureMessage = document.getElementById("pin-failure");

  if (typedNumber === currentPin) {
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }

  displayPinField.value = "";
  typedNumberField.value = "";
});
