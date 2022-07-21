// Crie uma função para verificar se um valor é Truthy

function verifica(valor) {
  if(valor > 5){
    return true
  } else {
    return false
  }
}

console.log(verifica(6))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
var lado1= 4;
var lado2= 6;
var lado3= 3;
var lado4= 7;
function perimetroQuadrado () {
  return lado1 + lado2 +lado3 +lado4
}
console.log(perimetroQuadrado())

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(){
  var nome= "nicolly";
  var sobrenome = "costa";
  return `Seu nome completo é: ${nome} ${sobrenome}`
}

console.log(nomeCompleto())

// Crie uma função que verifica se um número é par
function verificaNumero(num){
  if (num %2==0){
    return 'Este número é par'
  } else {
    return 'Este número é impar'
  }
}

console.log(verificaNumero(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaArgumento (num){
  return (typeof num)
}

console.log(verificaArgumento('a'))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function()
{
  console.log("Nicolly")
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function faltaVisitar (paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(30));
console.log(precisoVisitar(20));

