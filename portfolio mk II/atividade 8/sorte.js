 let luck = 0 ;
 let azar = 0 ;

 function sorte(){
 let min= 1;
    let max= 101;
    let dif= max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
document.getElementById("resultado").innerHTML = num;
    if(num > 50){
        let img = document.createElement("img");
        img.src = "Sorte.png";
        document.getElementById("resultado").appendChild(img);
        luck++;
        document.getElementById("sorte").innerHTML = luck;
        alert("Você é sortudo, tente novamente");
    } 
    else{
        let img = document.createElement("img");
        img.src = "Trabalho-sorte-azar.webp";
        document.getElementById("resultado").appendChild(img);
        azar++;
        document.getElementById("azar").innerHTML = azar;
        alert("Você é azarado, tente novamente");
    }
}