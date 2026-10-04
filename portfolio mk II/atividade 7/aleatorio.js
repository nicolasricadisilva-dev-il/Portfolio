   
   //n sei como funciona//
    function aleatorio() {
    let min= 1;
    let max= 100;
    let dif= max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    document.getElementById("resultado").innerHTML = num;

    if (num == 67){
        alert("Parabéns, você farmou +99999 aura");
    }   
    if (num == 69){
        alert("( ͡° ͜ʖ ͡°)");

    }
    }