//Obtener numero aleatorio del 0 al 100
const numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);

//Obtener el input
const input = document.querySelector("#texto")

//Obtener h1 logs
const logs = document.querySelector("#logs")

//Funcion que se ejecuta al pulsar el boton
const button = () => {
    if(input.value == numeroAleatorio){//Si el valor es igual imprime you won
        logs.innerHTML = `you won the number was ${numeroAleatorio}`
        console.log("You Won");
    }else if(input.value < numeroAleatorio){//Si el valor es menor imprime Higher
        logs.innerHTML = `Higher`
        console.log("Higher");
        
    }else{//Si no se cumple ninguna imprime Lower
        logs.innerHTML = `Lower`
        console.log("Lower");
        
    }
}