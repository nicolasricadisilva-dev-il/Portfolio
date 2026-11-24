function contar() {
    let saida = document.getElementById('saida');
    let cont = 1;
    
    while (cont <= 10) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<p>&#x1F449; <mark>${cont}</mark></p>`;
        } else {
            saida.innerHTML += `<p>&#x1F449; ${cont}</p>`;
        }
        cont++;
    }
    
    saida.innerHTML += `<p>&#x1F3C1;</p>`;
}
