  
var question = prompt("Введите ваш возраст");

console.log ("age = " + question);

var answer = confirm("Вам точно " +  question + "лет?");

if (answer == true){
    alert("true");
    
    } else { 
    alert("false");
    }