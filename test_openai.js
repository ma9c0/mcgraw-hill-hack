// Define the question using a template literal for clarity.
const question = `Multiple Choice Question
According to Freudian theory, the Blank______ contains material that is easily brought to mind, while the Blank______ contains material that is not accessible because the material in it is threatening.

Multiple choice question.

id, ego

preconscious, unconscious

unconscious, preconscious

id, superego

preconscious, conscious`;

// Build the message by combining the prompt and the question.
const message = `Only give me the index of the correct choice.
If the correct choice is A, only give me the number 0; similarly, if the right choice is B, only give me the number 1.
${question}`;

const apiKey = '';
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
    console.log(data.choices[0].message.content);
})
.catch(error => console.error('Error:', error));