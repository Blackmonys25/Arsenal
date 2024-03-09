
const form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var text3 = document.getElementById("text3").value;

    var my_text = `Новая заявка:%0A - Имя: ${text1} %0A - Номер: ${text2} %0A - Коментарий: ${text3}`

    var token = "7070024804:AAGsIqQFk3q4x7hJEEeA3YM7uSgpQlRJnX0";
    var chat_id = "-1002110403278"
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text} `


    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();


alert('Спасибо!')
window.location.reload();
})


