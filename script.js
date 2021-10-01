const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const nextBtn = document.querySelector("#next-btn");
const noOfNotes = document.querySelectorAll(".num-of-notes");
const availableNotes = document.querySelectorAll(".notes");
const hideDisplay = document.querySelector(".hidden");
const btnContainer = document.querySelector(".nextbtn-container");
const displayMsg = document.querySelector("#display-msg");
const notes = [2000, 500, 100, 20, 10, 5, 1];

hideBefore();
fillNotes();

nextBtn.addEventListener("click", function () {
  checkInput();
});

function hideBefore() {
  hideDisplay.classList.add("hide");
  checkBtn.classList.add("hide");
}

function fillNotes() {
  for (let x = 0; x < notes.length; x++) {
    availableNotes[x].innerText = notes[x];
  }
}

checkBtn.addEventListener("click", function () {
  if (cashGiven.value && billAmount.value) {
    if (Number(cashGiven.value) < 1 || Number(billAmount.value) < 1) {
      displayMsg.innerText =
        "Enter Valid Amount, Amount Entered cannot be less than 1";
      noNotes();
    } else if (Number(cashGiven.value) === Number(billAmount.value)) {
      displayMsg.innerText = "no change to be returned";
      noNotes();
    } else if (Number(cashGiven.value) < Number(billAmount.value)) {
      displayMsg.innerText = "Cash Given cannot be less than Bill Amount";
      noNotes();
    } else {
      let cashToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      displayMsg.innerText = `cash to be returned ${cashToBeReturned}`;
      calculateChange(cashToBeReturned);
    }
  } else {
    displayMsg.innerText = "Input fields cannot be empty";
    noNotes();
  }
});

function unhideDisplay() {
  hideDisplay.classList.remove("hide");
  checkBtn.classList.remove("hide");
  nextBtn.classList.add("hide");
  btnContainer.classList.add("hide");
}

function checkInput() {
  if (!billAmount.value || Number(billAmount.value) < 1) {
    displayMsg.innerText = "Enter valid bill amount";
  } else {
    displayMsg.innerText = "";
    unhideDisplay();
  }
}

function calculateChange(change) {
  for (let x = 0; x < notes.length; x++) {
    let numNotes = Math.trunc(change / notes[x]);
    change %= notes[x];
    noOfNotes[x].innerText = numNotes;
  }
}

function noNotes() {
  for (let x = 0; x < noOfNotes.length; x++) {
    noOfNotes[x].innerText = "0";
  }
}
