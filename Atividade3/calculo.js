function calcular(){
     let nota1trim = Number(prompt("digite a nota do primeiro trimestre:"))
     let nota2trim = Number(prompt("digite a nota do segundo trimestre:"))

     let resultado = 180-(nota1trim+nota2trim);
     alert("Você precisa de " + resultado + " pontos para passar")
    if (nota1trim + nota2trim >= 180) {
        alert("Você passou relaxe");
     
} 
else{
    alert("Você não passou ainda");
}
    }
   