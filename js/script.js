const buttonAnalyzeEl = document.getElementById("btn-analyze");

const buttonPlayEl = document.getElementById("btn-play");

buttonAnalyzeEl.addEventListener("click", function() {
    const wordInputEl = document.getElementById("word-input");
    const wordInput = wordInputEl.value;
    const result1El = document.getElementById("result-1");

    if(wordInput != "") {
        result1El.style.color = "black";
        if(isPalindrome(wordInput)) {
            result1El.innerText = "La parola " + wordInput + " è palindroma.";
        }
        else {
            result1El.innerText = "La parola " + wordInput + " NON è palindroma.";
        }
    }
    else {
        result1El.style.color = "red";
        result1El.innerText = "Inserisci una parola nel campo di testo.";
    }
});

buttonPlayEl.addEventListener("click", function() {
    const result2El = document.getElementById("result-2");

    let userChoice = document.getElementById("even-odd-input").value;

    let userNumber = parseInt(document.getElementById("number-input").value);

    if(userNumber >= 1 && userNumber <= 5) {
        let pcNumber = parseInt(generateRandomNumber(1, 5));
        
        result2El.style.color = "black";
        result2El.innerHTML = "Hai giocato: " + userNumber + "<br>" + "Il pc ha giocato: " + pcNumber + "<br>";

        if(isEvenOrOdd(userNumber + pcNumber) == userChoice) {
            result2El.innerHTML += "Hai vinto !";
        }
        else {
            result2El.innerHTML += "Hai perso..";
        }
    }
    else {
        result2El.style.color = "red";
        result2El.innerHTML = "Inserisci un numero compreso tra 1 e 5.";
    }
});




// -------------------------------FUNCTIONS-------------------------------------

/**
 * Restituisce true se la parola inserita è palindroma, falso altrimenti.
 * @param {string} word
 * @returns {boolean}
 */
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


/**
 * Restituisce la stringa "pari" se number è pari, "dispari" se è dispari.
 * @param {number} number
 * @returns {string}
 */
function isEvenOrOdd(number) {
    if(number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

/**
 * Genera un numero casuale compreso tra min e max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}