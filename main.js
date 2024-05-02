// This The First Version
function translate() {
    var sourceText = document.getElementById('sourceText').value;
    var sourceLang = document.getElementById('sourceLang').value;
    var targetLang = document.getElementById('targetLang').value;
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultText').value = data[0][0][0];
        })
        .catch(error => console.error('Error:', error));
}
var source = document.querySelector("#sourceText");
var result = document.querySelector("#resultText");
source.oninput = function() {
    translate();
}
source.addEventListener("focus", function() {
    result.disabled = false;
});
source.addEventListener("mouseleave", function() {
    result.disabled = true;
});



