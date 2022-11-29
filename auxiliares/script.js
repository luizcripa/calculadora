var operador=["","*","/","-","+","%"]
var tamanho =0, tela01 =0, tela02 =0;

function atribuiValor(digitado){
    tela01 = pegavalor('#visor');
    tela01 = tela01 + digitado ; 
    informavalor( tela01.toString(),"");
}

function calcula(){
    operacao(0)
    tela02 = pegavalor("#cache");
    var r = eval(tela02).toFixed(2); 
    informavalor(r.toString(), tela02 +"=" + r.toString());
}

function operacao(temp03){
    tela01 = pegavalor('#visor');
    tela02 = pegavalor('#cache');
    tamanho = tela02.length;
    if (tamanho == 0){        
        tela02 = tela01 + operador[temp03];
    }else{        
        var igual = tela02.indexOf("=");
        if(igual != "-1"){
            tela02 = tela02.substr(igual + 1,tamanho);
            tela02 = tela02 + operador[temp03];
        }else{
            tela02 = tela02 + tela01 +operador[temp03];
        }     
    }    
    informavalor(" ",tela02);
}

function porcentual(){
    tela01 = document.querySelector('#visor').value;
    tela02 = document.querySelector('#cache').value;
    tamanho = tela02.length;
    var maisoumenos =  tela02.substr(tamanho - 1 , tamanho);
    tela02 = tela02.substr(0 , tamanho - 1 );
    tela02 = Number(tela02);

    var multiplo = tela01 * tela02 /100;
    
    if(maisoumenos =="+"){
        tela02 = eval(tela02 + multiplo);
    }else{
        tela02 = eval(tela02 - multiplo);
    }
    document.querySelector("#cache").value = tela02;
    document.querySelector("#visor").value = tela02;
}


function limpaValores(){
    informavalor(" "," ");
}

function deleta(){
    tela01 = pegavalor("#visor");
    tela01 = tela01.toString();
    tamanho = tela01.length;
    informavalor( tela01.substr(0,eval(tamanho-1),""))
}

function informavalor(par01,par02){
    if(par01.length > 0){
        document.querySelector('#visor').value = par01 ;
    }
        if(par02.length > 0){
        document.querySelector('#cache').value = par02;
    }
}
function pegavalor(idcampo){
    return idcampo =  document.querySelector(idcampo).value;
}