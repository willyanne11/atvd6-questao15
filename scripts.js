let soma = 0;


while (true) {

    let numero = parseFloat(prompt("digite um numero (ou um numero negativo para encerrar):"));


    if (numero < 0) {
        break; 
    }

    soma += numero;
}


alert("a soma dos numeros digitados é: " + soma);
