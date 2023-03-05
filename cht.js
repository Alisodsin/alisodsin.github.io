const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let arr = []
async function sendToOpenAI(message) {
    let myobj = { role: "user", "content": message }
    arr.push(myobj)
    const apiKey = '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';
    const url = 'https://api.openai.com/v1/chat/completions';

    let obj = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: arr
        })
    })
    let data = await obj.json();
    let respnse = data.choices[0].message.content.trim()
    arr.push(data.choices[0].message)
    return `${respnse}`;
}

async function handleInput(input) {
    const userInput = input.trim();
    const aiResponse = await sendToOpenAI(userInput, "hyperactivityoneday123");
    console.log(`${aiResponse}`);
    rl.prompt();
}

rl.setPrompt('');
rl.prompt();
rl.on('line', handleInput);