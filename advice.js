const advice_id_elt = document.getElementById('advice_id');
const advice_text_elt = document.getElementById('advice_text');
const advice_toggle = document.getElementById('advice_toggle');

function updateAdvice(){
    var data = JSON.parse(this.responseText);
    advice_id_elt.textContent = data.slip.id;
    advice_text_elt.textContent = data.slip.advice;
}
function askAdvice(){
    var askAdvice = new XMLHttpRequest();
    askAdvice.onload = updateAdvice;
    askAdvice.open("get", "https://api.adviceslip.com/advice?_"+new Date().getTime(), true);
    askAdvice.send();
}

askAdvice();
advice_toggle.addEventListener('click', askAdvice);