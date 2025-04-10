console.log('hi main.js')

url = window.location.href

if (url.includes('https://learning.mheducation.com/static/awd/index.html?_t')){
  const startButton = document.querySelector('[data-automation-id="welcome--start_button"]');
  if (startButton){
    startButton.click()
  }
}
else{
  console.error("not on begin page");
}

const got_it = document.querySelector("body > ngb-modal-window > div.modal-dialog.modal-fullscreen-md-down > div > awd-tips-modal > div.modal-footer > button")

if (got_it){
  got_it.click()
}

var question = document.getElementsByClassName('prompt')[0].textContent

//fill in the blank
header = document.getElementsByClassName('probe-header')
if (header[0].textContent == ' Fill in the Blank Question '){
  blank = document.getElementsByClassName('input-container span-to-div')
  blank[0].autocorrect = 'true'
  blank[0].getAttribute(autocorrect) = 'true'
}
else{

//multiple choice
//get buttons, in a length of number of choices
buttons = document.getElementsByClassName("ahe-ui-radio")
//correct choice
cor = buttons[2].querySelector('input')
b = cor.getAttribute('aria-labelledby')
var choice = document.querySelector('input[aria-labelledby="' + b + '"]');
choice.focus()
choice.click()

}

//click high confidence button
var highConfButton = document.querySelector('[data-automation-id="confidence-buttons--high_confidence"]');
if (highConfButton) {
  if (highConfButton.disabled) {
    highConfButton.removeAttribute("disabled");
  }
  highConfButton.click();
} else {
  console.error("High Confidence button not found.");
}

function clickNextQuestion() {
  const next = document.querySelector("#root-container > div.root__content.content__main > awd-main-container > div > awd-navigation-bar > div > awd-question-button-bar > div > awd-next-button > button");
  if (next) {
    next.click();
    console.log("Next question button clicked.");
  } else {
    console.error("Next question button not found.");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", clickNextQuestion);
} else {
  clickNextQuestion();
}
