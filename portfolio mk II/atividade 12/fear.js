let inscritos = 0;
let times = 0; 
let sobra = 0;


const JOGADORES_POR_TIME = 3; 

function inscrever(){
    inscritos++; 
    
    
    times = Math.floor(inscritos / JOGADORES_POR_TIME);
    
    
    sobra = inscritos % JOGADORES_POR_TIME;
    
    
    if (times >= 4) {
        alert("Já temos times suficientes para fazer o interclasse, mas chame mais pessoas!! Quanto mais melhor");
    }
    
    
    console.log(`Inscritos: ${inscritos} | Times: ${times} | Sobra: ${sobra}`);
}