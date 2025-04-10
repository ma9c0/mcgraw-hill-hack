
(function() {
    'use strict';
  
    console.log('Script started');
    const API = API
    do_the_thing();
  
    function do_the_thing() {
      console.log('do_the_thing called');
  
      // 1) Check question type and gather the question info
      const header = document.querySelector('.probe-header');
      var question = document.getElementsByClassName('prompt')[0].textContent
      if (header && header.textContent.includes('Fill in the Blank Question')) {
        // Fill-in-the-blank logic...
        console.log('Detected a Fill-in-the-Blank question');
        // (Do your fetch, fill the blank, etc.)
      } else {
        // Multiple choice logic...
        console.log('Detected a Multiple Choice question');

        //multiple choice
        var question = document.getElementsByClassName('prompt')[0].textContent
        //get choices
        var choices = document.getElementsByClassName('choiceText rs_preserve')
        var num_choices = choices.length
        var choices_txt = ""
        var i = 0
        for (i = 0; i < num_choices; i += 1){
        var txt = choices[i].textContent
        choices_txt += i + ": " + txt + "\n"
        }

        var answer = 0

        // Build the message by combining the prompt and the question.
        const message = `Only give me the index of the correct choice.
        If the correct choice is A, only give me the number 0; similarly, if the right choice is B, only give me the number 1.
        ${question}` + choices_txt;

        const apiKey = API;
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
            var buttons = document.getElementsByClassName("ahe-ui-radio")
            //correct choice
            var cor = buttons[answer].querySelector('input')
            var b = cor.getAttribute('aria-labelledby')
            var choice = document.querySelector('input[aria-labelledby="' + b + '"]');
            choice.focus()
            choice.click()
            setTimeout(()=>{
                proceed()
              },500)
        })
      }
  
      // 2) When ready, call proceed() to click high confidence + next question
    }
  
    function proceed() {
      // 1) Click High Confidence
      setTimeout(() => {
        const highConfButton = document.querySelector('[data-automation-id="confidence-buttons--high_confidence"]');
        if (highConfButton) {
          if (highConfButton.disabled) {
            highConfButton.removeAttribute('disabled');
          }
          highConfButton.click();
          console.log('High Confidence clicked');
        } else {
          console.error('High Confidence button not found.');
        }
      }, 500);
  
      // 2) Click Next question, then call do_the_thing again
      setTimeout(() => {
        const nextBtn = document.querySelector(
          '#root-container > div.root__content.content__main > awd-main-container > div > awd-navigation-bar > div > awd-question-button-bar > div > awd-next-button > button'
        );
        if (nextBtn) {
          nextBtn.click();
          console.log('Next question button clicked');
          // Wait 1–2 seconds for the next question to load, then re-run do_the_thing
          setTimeout(() => {
            do_the_thing();
          }, 2000);
        } else {
          console.error('Next question button not found.');
        }
      }, 1000);
    }
  })();
  