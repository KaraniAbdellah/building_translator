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




// convert text to voice
const volume_icon = document.querySelector(".volume");
volume_icon.addEventListener("click", function() {
    
    // convert text to voice

});


// convert voice to text
const micro_icon = document.querySelector(".micro");
micro_icon.addEventListener("click", function() {
    
    // convert voice to text
    console.log("hello");
    let utterance = new SpeechSynthesisUtterance("Educative.io");
    speechSynthesis.speak(utterance);

});









