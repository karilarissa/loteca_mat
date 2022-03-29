var numSort = [];
var numEsco = [];

function sorteio() {
  var cont = 0;
  numSort = [];

function sorteioNum(){
  if(numDig.length < 6){
    alert("Antes de sortear digite 6 números nos campos")

  numSort=[]
  do{
    let sort = Math.ceil(Math.random()*60)
    if(!numSort.includes(sort))
        numSort.push(sort)
  }while(numSort.length<6){

    document.getElementById("numsort").innerHTML=numSort
    verificaAcertos()
  }else{
    alert("Aprovada!")
  }
  }
}

  while (cont < 6) {
    let num = Math.random() * 60;
    num = Math.ceil(num);
    if (!numSort.includes(num)) {
      numSort[cont] = num;
      console.log(numSort);
      cont++;
    }
  }

  document.getElementById("sorteados").innerHTML = numSort;
  contAcertos();
}




function getValor(valor, pos) {
  valor = Number(valor);
  if (valor <= 0 || valor > 60) {
    alert("Numero invalido, digite um entre 1 e 60");
    document.getElementById(`num${pos + 1}`).value = "";
  } else if (numEsco.includes(valor)) {
    alert("Numero repetido, escolha um outro numero!");
    document.getElementById(`num${pos + 1}`).value = "";
  } else {
    numEsco[pos] = valor;
    console.log(numEsco);
  }
}

function contAcertos() {
  var contA = 0;
  numEsco.forEach(function (value, index) {
    if (numSort.includes(value)) {
      contA = contA + 1;
    }
  });
  document.getElementById("acertos").innerHTML = contA;
}
