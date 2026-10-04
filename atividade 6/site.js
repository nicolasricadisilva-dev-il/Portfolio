function site(){
    let nome;
    let result;
    let agora = new Date();
    nome = prompt("Digite seu nome");
    result = window.document.getElementById("resultado");
    result.innerHTML = `<p>Olá ${nome}, seja bem-vindo(a) ao meu site! É um prazer conhece-lo\n O  sistema me enviou a seguinte informação: <mark>${agora}</mark> </p>`;
}