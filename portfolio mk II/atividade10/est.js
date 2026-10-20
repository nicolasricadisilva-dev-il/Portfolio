function estacao() {
    let mes = prompt("Digite o mês por extenso por exemplo (setembro)");
    let mostrar = document.getElementById('resultado');
    
    mes = mes.toUpperCase();

    // O USUÁRIO INFORMA O MÊS POR EXTENSO 
     // E O SISTEMA INFORMA A ESTAÇÃO DAQUELE MÊS
        if (mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'MARÇO') {
          mostrar.innerHTML = `<p> É Verão </p>`;
        }
     
      if (mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO' || mes =='JUNHO' ) {
          mostrar.innerHTML = `<p> É Outono</p>`;}
          
          if (mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO' || mes == 'SETEMBRO') {
          mostrar.innerHTML = `<p> É Inverno </p>`;}


           if (mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO' || mes == 'DEZEMBRO') {
          mostrar.innerHTML = `<p> É Primavera </p>`;
}
}