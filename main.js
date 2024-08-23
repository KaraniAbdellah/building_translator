// Function For Translating The Content
function translate() {
    let sourceText = document.getElementById('sourceText').value;
    let sourceLang = document.getElementById('sourceLang').value;
    let targetLang = document.getElementById('targetLang').value;
    if (sourceText) {
        let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('resultText').value = data[0][0][0];
            })
            .catch(error => console.error('Error:', error));
    }
}

// Transalte The Content && Handle The Delete Content
let source = document.querySelector("#sourceText");
let result = document.querySelector("#resultText");
let mark = document.querySelector(".mark");

source.oninput = function() {
    translate();
    if (source.value != "") mark.style.display = "block";
    else mark.style.display = "none";
}
source.addEventListener("focus", function() {
    result.disabled = true;
});

mark.addEventListener("click", function(e) {
    source.value = "";
    result.value = "";
    mark.style.display = "none";
});


// Changing The Language
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

targetLang.addEventListener("click", function() {
    translate();
});

sourceLang.addEventListener("click", function() {
    translate();
});



// Start Handle Operations
const icons_btns = document.querySelectorAll(".icons");
icons_btns.forEach(element => {
    element.addEventListener("click", function(e) {
        if (e.target.classList.contains("copy")) {
            let ele = e.target.parentElement.parentElement.firstElementChild;
            if (ele.classList.contains("mark")) ele = ele.nextElementSibling;
            let text = ele.value;
            navigator.clipboard.writeText(text);
        }
        if (e.target.classList.contains("micro")) {
            
        }
        if (e.target.classList.contains("volume")) {
            
        }
    })
});

// fix the style and colors 
// search for voise in js
// search how w can speaj in js





// Ensure the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US'; // Set the language as needed
    recognition.interimResults = false; // If you want final results only
    recognition.maxAlternatives = 1;

    // Handle the result event
    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        console.log(spokenText); // Log the recognized text to the console
    };

    // Handle errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    // Attach a click event listener to the element with class "micro"
    document.querySelector('.micro').addEventListener('click', () => {
        recognition.start(); // Start speech recognition
        console.log('Listening...');
    });
} else {
    console.log('Web Speech API not supported in this browser.');
}









