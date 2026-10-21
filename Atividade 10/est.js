
function estacao() {
    let mes = prompt("Digite o mês por extenso (exemplo: setembro)");
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    if (mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'MARÇO') {
        mostrar.innerHTML = `<p>A estação em ${mes}É Verão</p>`;
    }
     if (mes == 'ABRIL' || mes == 'MAIO' || mes == 'JUNHO') {
        mostrar.innerHTML = `<p>A estação em ${mes}É Outono</p>`;
    }
    if (mes == 'JULHO' || mes == 'AGOSTO' || mes == 'SETEMBRO') {
        mostrar.innerHTML = `<p>A estação em ${mes} É Inverno</p>`;
    }
    if (mes == 'OUTUBRO' || mes == 'NOVEMBRO') {
        mostrar.innerHTML = `<p>A estação em ${mes} Primavera</p>`;
    }
    else {
        mostrar.innerHTML = `<p>o mês ${mes} é inválido!</p>`;
    }
}

