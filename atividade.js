var ListaDePecas = [ "Amortecedor", "Motor", "Correia dentada", "Filtro de ar", "pneu 14"];

if (ListaDePecas.Length > 5 ) {
    console.log ("Não é possivel cadastrar por excesso de pecas");
} else {
    console.log("Limite permitido")
}

let peso = 60;

if (peso >= 100) { 
    console.log ("Peso permitido")
} else {
    console.log ("O peso está fora do normal")
}

let peca = "Fa";
if (peca.length < 3){
    console.log ("O nome da peça é muito pequeno")
} else {
    console.log ("O nome da peça é valido");
}