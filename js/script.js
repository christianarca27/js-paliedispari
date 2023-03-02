const buttonAnalyzeEl = document.getElementById("btn-analyze");
console.log(buttonAnalyzeEl);

buttonAnalyzeEl.addEventListener("click", function() {
    const wordInputEl = document.getElementById("word-input");
    const wordInput = wordInputEl.value;
    const result1El = document.getElementById("result-1");

    if(isPalindrome(wordInput)) {
        result1El.innerText = "La parola " + wordInput + " è palindroma.";
    }
    else {
        result1El.innerText = "La parola " + wordInput + " NON è palindroma.";
    }
});




// -------------------------------FUNCTIONS-------------------------------------

function isPalindrome(word) {
    let reverseWord = "";
    for(let i = 0; i < word.length; i++) {
        reverseWord += word[word.length - 1 - i];
    }

    if(word == reverseWord) {
        return true;
    }
    else {        
        return false;
    }
}