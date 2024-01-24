//@Override Console Log Function to Page
/* (function () {
  var old = console.log;
  var logger = document.getElementById("log");
  console.log = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();
 */

// Mensagem de boas-vindas
console.log("Bem-vindo!");

// Exibindo mensagem com o nome usando console.log
var nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");

// Exibindo mensagem com o nome usando alert
alert("Olá, " + nome + "!");

// Utilizando o prompt para obter a linguagem de programação favorita
var linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de programar em " + linguagem + ".");

// Realizando a soma de dois valores
var valor1 = 5;
var valor2 = 10;
var resultadoSoma = valor1 + valor2;
console.log(
  "A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma + "."
);

// Realizando a subtração de dois valores
var resultadoSubtracao = valor1 - valor2;
console.log(
  "A diferença entre " +
    valor1 +
    " e " +
    valor2 +
    " é igual a " +
    resultadoSubtracao +
    "."
);

// Verificando a maioridade com base na idade inserida
var idade = prompt("Insira sua idade:");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Verificando se um número é positivo, negativo ou zero
var numero = prompt("Insira um número:");
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Usando um loop while para imprimir números de 1 a 10
var contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Verificando a nota e exibindo "Aprovado" ou "Reprovado"
var nota = prompt("Insira sua nota:");
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Gerando um número aleatório e exibindo no console
var numeroAleatorio = Math.random();
console.log("Número aleatório: " + numeroAleatorio);

// Gerando um número inteiro entre 1 e 10
var numeroInteiro = Math.floor(Math.random() * 10) + 1;
console.log("Número inteiro entre 1 e 10: " + numeroInteiro);

// Gerando um número inteiro entre 1 e 1000
var numeroInteiroGrande = Math.floor(Math.random() * 1000) + 1;
console.log("Número inteiro entre 1 e 1000: " + numeroInteiroGrande);
