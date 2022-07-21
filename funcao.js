function areaQuadrada(lado){
 return lado * lado
}

console.log (areaQuadrada(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total)

// peso e altura são os parâmetros
function imc (peso, altura){
  var imc=peso / (altura*altura)
  return imc;
}

console.log(imc(80, 1.8));// 80 e 1.8 são os argumentos

function corfavorita (cor) {
  if(cor === 'azul'){
    return 'Eu gosto do céu'
  } else if (cor==='verde'){
    return 'Eu gosto do mato'
  } else{
    'Eu não gosto de nada';
  }
}

console.log(corfavorita('verde'))

//addEventListener('click', function(){console.log('oi')});
//function mostraConsole(){
 // console.log('oi')
//}

//addEventListener('click', mostraConsole);

function imc2 (peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8);

function terceiraIdade (idade) {
  if(typeof idade !== 'number'){
    return "Por favor, digite um número!"
  }
  else if (idade >=60){
    return true;
  } else {
    return false
  }
}

console.log(terceiraIdade(80));

var totalPaises = 193;

function faltaVisitar (paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(30));

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro
