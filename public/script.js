var i = 0;
var j = 0;
var k = 0;
var guardarComida = 0;
var guardarBebida = 0;
var guardarSobremesa = 0;
var precoAntigoComida = 0;
var precoAntigoBebida = 0;
var precoAntigoSobremesa = 0;
var soma = 0;

function selecionarOpcao1(id,preco){
  if(i == 0 ){
    var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarComida = id;
    precoAntigoComida = preco;
    element.setAttribute("id", "selecionado1");
    i++;
    soma = soma + parseFloat(preco);
  }
  else{
    var element = document.querySelector('#selecionado1');
    element.style.boxShadow = "0px 0px 10px #B2B2B2";
    i--;
    soma = soma - parseFloat(precoAntigoComida);
    element.setAttribute("id", guardarComida.substring(1));
    if(id == guardarComida)
    {

    }
    else{
      var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarComida = id;
    element.setAttribute("id", "selecionado1");
    i++;
    soma = soma + parseFloat(preco);
    }
  }
  habilitaBotao();
}

function selecionarOpcao2(id, preco){
  if(j == 0 ){
    var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarBebida = id;
    precoAntigoBebida = preco;
    element.setAttribute("id", "selecionado2");
    j++;
    soma = soma + parseFloat(preco);
  }
  else{
    var element = document.querySelector('#selecionado2');
    element.style.boxShadow = "0px 0px 10px #B2B2B2";
    j--;
    soma = soma - parseFloat(precoAntigoBebida);
    element.setAttribute("id", guardarBebida.substring(1));
    if(id == guardarBebida)
    {

    }
    else{
      var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarBebida = id;
    element.setAttribute("id", "selecionado2");
    j++;
    soma = soma + parseFloat(preco);
    }
  }
  habilitaBotao();
}

function selecionarOpcao3(id,preco){
  if(k == 0 ){
    var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarSobremesa = id;
    precoAntigoSobremesa = preco;
    element.setAttribute("id", "selecionado3");
    k++;
    soma = soma + parseFloat(preco);
  }
  else{
    var element = document.querySelector('#selecionado3');
    element.style.boxShadow = "0px 0px 10px #B2B2B2";
    k--;
    soma = soma - parseFloat(precoAntigoSobremesa);
    element.setAttribute("id", guardarSobremesa.substring(1));
    if(id == guardarSobremesa)
    {

    }
    else{
      var element = document.querySelector(id);
    element.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guardarSobremesa = id;
    element.setAttribute("id", "selecionado3");
    k++;
    soma = soma + parseFloat(preco);
    }
  }
  habilitaBotao();
}

function habilitaBotao(){
  if(i+j+k==3)
  {
    var element1 = document.querySelector('.fechar-pedido');
    var element2 = document.querySelector('.fechar-pedido div');
    element1.style.display = "flex";
    element2.style.display = "flex";
  }
  else{
    var element1 = document.querySelector('.fechar-pedido');
    var element2 = document.querySelector('.fechar-pedido div');
    element1.style.display = "none";
    element2.style.display = "none";
  }
}

function Mensagem(){
  var final = soma.toFixed(2);
var texto = "Olá, eu gostaria de fazer o pedido:\n- Prato: "+document.querySelector("#selecionado1 h1").innerText+"\n- Bebida: "+document.querySelector("#selecionado2 h1").innerText+"\n- Sobremesa: "+document.querySelector("#selecionado3 h1").innerText+"\nTotal: R$ "+final+"\n"
var textofinal = encodeURIComponent(texto);
window.open("https://wa.me/5545998446284?text="+textofinal);
}
