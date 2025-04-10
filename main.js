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
  const message = `Only give me the word that is in the blank.
  ${question}`;

  const apiKey = 'API';
  const model = 'deepseek-chat'; 
  const prompt = message;

  fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          model: model,
          messages: [{ "role": "user", "content": prompt }]
      })
  })
  .then(response => response.json())
  .then(data => {
      answer  = data.choices[0].message.content;
      //get buttons, in a length of number of choices
      buttons = document.getElementsByClassName("ahe-ui-radio")
      //correct choice
      cor = buttons[answer].querySelector('input')
      b = cor.getAttribute('aria-labelledby')
      var choice = document.querySelector('input[aria-labelledby="' + b + '"]');
      choice.focus()
      choice.click()
  })
  .catch(error => console.error('Error:', error));
  blank = document.getElementsByClassName('input-container span-to-div')
  blank[0].autocorrect = 'true'
}
else{

//multiple choice
var question = document.getElementsByClassName('prompt')[0].textContent
//get choices
choices = document.getElementsByClassName('choiceText rs_preserve')
num_choices = choices.length
choices_txt = ""
var i = 0
for (i = 0; i < num_choices; i += 1){
  txt = choices[i].textContent
  choices_txt += i + ": " + txt + "\n"
}

var answer = 0

// Build the message by combining the prompt and the question.
const message = `Only give me the index of the correct choice.
If the correct choice is A, only give me the number 0; similarly, if the right choice is B, only give me the number 1.
${question}` + choices_txt;

const apiKey = 'API';
const model = 'deepseek-chat'; 
const prompt = message;

fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        model: model,
        messages: [{ "role": "user", "content": prompt }]
    })
})
.then(response => response.json())
.then(data => {
    answer  = data.choices[0].message.content;
    //get buttons, in a length of number of choices
    buttons = document.getElementsByClassName("ahe-ui-radio")
    //correct choice
    cor = buttons[answer].querySelector('input')
    b = cor.getAttribute('aria-labelledby')
    var choice = document.querySelector('input[aria-labelledby="' + b + '"]');
    choice.focus()
    choice.click()
    //click high confidence button
    setTimeout(() => {
      const highConfButton = document.querySelector('[data-automation-id="confidence-buttons--high_confidence"]');
      if (highConfButton) {
        // remove the disabled attribute if present
        if (highConfButton.disabled) {
          highConfButton.removeAttribute("disabled");
        }
        highConfButton.click();
      } else {
        console.error("High Confidence button not found.");
      }
    }, 500);

    // function to click the next question
    function clickNextQuestion() {
      const next = document.querySelector("#root-container > div.root__content.content__main > awd-main-container > div > awd-navigation-bar > div > awd-question-button-bar > div > awd-next-button > button");
      if (next) {
        next.click();
        console.log("Next question button clicked.");
      } else {
        console.error("Next question button not found.");
      }
    }

    setTimeout(() => {
      clickNextQuestion()
    }, 500)
})
.catch(error => console.error('Error:', error));
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
