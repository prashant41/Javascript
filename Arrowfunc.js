
//Arrow Function

summ = (a, b) => {
    return a + b;
}

//SetTimeout  and SetTimeInterveal

logKaro = () => {
    document.querySelector('.container')[1].innerHTML  = "<b>Set Interval Fired</b>"
    console.log("I am your Log")
}


setTimeout(logKaro, 2000);
setInterval(logKaro, 2000);