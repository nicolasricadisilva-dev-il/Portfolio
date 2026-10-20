let jogador = 0;


let min = 1;
let max = 100;
let dif= max - min;
let num = Math.floor(Math.random() * (max - min +1 )) + min;
//responsáveis pelo jogo
function jogar() {
 
jogador = Number(prompt("digite um número de 1 a 100"))
if(num > jogador){
document.getElementById("resultado").innerHTML += `<p>Você pensou em</p> ${jogador} <p>O Número é MAIOR  </p>`;
}
if(num < jogador){
document.getElementById("resultado").innerHTML += `<p>Você pensou em</p> ${jogador} <p>O Número é MENOR  </p>`;
}
if(num === jogador){
document.getElementById("resultado").innerHTML += `<p>Você pensou em</p> ${jogador} <p>O Número é IGUAL  </p>`;
num = Math.floor(Math.random() * (max - min +1 )) + min;}
}