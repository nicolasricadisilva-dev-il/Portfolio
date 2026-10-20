
function estacao() {
    let mes = prompt("Digite o mês por extenso (exemplo: setembro)");
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    if (mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'MARÇO') {
        mostrar.innerHTML = `<p>É Verão</p>`;
    }
    else if (mes == 'ABRIL' || mes == 'MAIO' || mes == 'JUNHO') {
        mostrar.innerHTML = `<p>É Outono</p>`;
    }
    else if (mes == 'JULHO' || mes == 'AGOSTO' || mes == 'SETEMBRO') {
        mostrar.innerHTML = `<p>É Inverno</p>`;
    }
    else if (mes == 'OUTUBRO' || mes == 'NOVEMBRO') {
        mostrar.innerHTML = `<p>É Primavera</p>`;
    }
    else {
        mostrar.innerHTML = `<p>Mês inválido!</p>`;
    }
}

