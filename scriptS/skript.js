
function showMessage() {
    let name = (prompt("Как Вас зовут?"));
    let message = 'Привет, ' + name;
    alert(message);
    let years = (prompt("Сколькоте тебе лет?"));
    let mess = 'Здорово! Тебе уже ' + years;
    alert(mess);
    alert("помнишь такой стишок с твоим именем?");
}
showMessage();