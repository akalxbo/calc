//Selecionando dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelector(".num");
const botoesOperadores = document.querySelector(".operador")

//Variaveis
let operacaoAtual = "";
let operador = "null";
let valorAnterior = "";
let calculando = false;

//Funções
const atualizaDisplay = ()=>{
    display.value = operacaoAtual;
};

const insereNumero = (evento) => {
    if (calculando){
        operacaoAtual = evento.target.textContet;
        calculando = false;
    } else {
        operacaoAtual += evento.target.textContet;
    }
    atualizaDisplay();
}

//EventListeners
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));