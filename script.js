const encryptBtn = document.querySelector('.encript-btn');
const decriptBtn = document.querySelector('.decript-btn');
const keyInput = document.querySelector('#key');
const continueBtn = document.querySelector('.continue-btn');
const inputText = document.querySelector('.text-area');
const welcomeMessageWrapper = document.querySelector('.welcome-message-wrapper');
const generalWrapper = document.querySelector('.general-wrapper');



let newText = '';

continueBtn.addEventListener('click', ()=>{
    welcomeMessageWrapper.style.display = 'none'
    generalWrapper.style.display = 'block'
})


encryptBtn.addEventListener('click', encryptFunction)


function encryptFunction(text, key) {
    let result = document.querySelector('.result');
    text = inputText.value 
    key = Number(keyInput.value);

    console.log(key);

    if (key === '' || key === 0) {
        alert('please enter key from 1 to 25')
    } else {
        for (const chr of text) {
            let code = chr.codePointAt(0);
            code = code + key;
    
            newText+= String.fromCodePoint(code)
        }

    }

    result.value = `${newText}`
    newText = ''
    return newText;

}

decriptBtn.addEventListener('click', decryptFunction)

function decryptFunction(text, key) {
    let result = document.querySelector('.result');
    text = result.value;
    key = Number(keyInput.value);

    for (const chr of text) {
       
        let code = chr.codePointAt(0);
        code = code - key 
        console.log(code);

        newText+= String.fromCodePoint(code)
    }

    result.value = `${newText}`;
    newText = ''
    console.log(newText);

}

 


