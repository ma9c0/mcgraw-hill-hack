console.log('hi main.js')
//https://learning.mheducation.com/static/awd/index.html?_t=1744233834206#/

const startButton = document.querySelector('[data-automation-id="welcome--start_button"]');

startButton.click()

const got_it = document.querySelector("body > ngb-modal-window > div.modal-dialog.modal-fullscreen-md-down > div > awd-tips-modal > div.modal-footer > button")

got_it.click()

var question = document.querySelector("#fitb_testing_69d38532-5822-58dd-8b73-49a5d628988b > p")

var text = question.textContent;

// Select the input element by its id
var blankInput = document.querySelector("#fitbTesting_7b98e57e-3ce3-4405-87dc-c29bddfdba84");


// TODO: fix insert answer
if (blankInput) {
  // Set the value
  blankInput.value = "Your answer here";

  // Create and dispatch an 'input' event
  var inputEvent = new Event('input', { bubbles: true });
  blankInput.dispatchEvent(inputEvent);

  // Create and dispatch a 'change' event
  var changeEvent = new Event('change', { bubbles: true });
  blankInput.dispatchEvent(changeEvent);

  // Optionally, also dispatch a 'blur' event (if needed by the app)
  var blurEvent = new Event('blur', { bubbles: true });
  blankInput.dispatchEvent(blurEvent);
} else {
  console.error("Input element not found.");
}

// works:
var highConfButton = document.querySelector('[data-automation-id="confidence-buttons--high_confidence"]');
if (highConfButton) {
  // Optionally, if the button is disabled, remove the "disabled" attribute.
  if (highConfButton.disabled) {
    highConfButton.removeAttribute("disabled");
  }
  // Now, simulate a click on the high-confidence button.
  highConfButton.click();
} else {
  console.error("High Confidence button not found.");
}

// multiple choice
var question = document.getElementsByClassName('prompt')[0].textContent

//get buttons, in a length of number of choices
buttons = document.getElementsByClassName("ahe-ui-radio")
//correct choice
cor = buttons[3].querySelector('input')
b = cor.getAttribute('aria-labelledby')
var choice = document.querySelector('input[aria-labelledby="' + b + '"]');
choice.focus()
choice.click()

if (radioButton) {
  // Optionally focus the radio button to simulate realistic interaction
  radioButton.focus();
  
  // Simulate a user click on the radio button
  radioButton.click();
  
  // If your framework requires an event, dispatch a change event
  var changeEvent = new Event('change', { bubbles: true });
  radioButton.dispatchEvent(changeEvent);
  
  console.log("Radio button for 'Jung' was clicked.");
} else {
  console.error("Radio button input not found.");
}

//next question
next = document.querySelector("#root-container > div.root__content.content__main > awd-main-container > div > awd-navigation-bar > div > awd-question-button-bar > div > awd-next-button > button")

