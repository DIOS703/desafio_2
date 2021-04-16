const calculator = document.querySelector(".container");
const keys = calculator.querySelector(".container-numeros");
var accionsigno
const pantalla = calculator.querySelector(".numActual");
const pantallaGuardado = calculator.querySelector(".numGuardado");
const pantallaSigno = calculator.querySelector(".Signo");
keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const tecla = e.target
        const action = tecla.dataset.action
        const contenidoTecla = tecla.textContent
        const numActivo = pantalla.textContent

      switch (action){
        case 'sumar':
        case 'restar':
        case 'multiplicar':
        case 'dividir':
          if(Boolean(pantallaSigno.textContent) && Boolean(pantallaGuardado.textContent) && Boolean(pantalla.textContent)){

          }
          else{
            if (numActivo == 0 || pantalla.textContent.length == 0){
              pantallaSigno.textContent = contenidoTecla;
              accionsigno = tecla.dataset.action;
          }
          else{
              accionsigno = tecla.dataset.action;
              pantallaSigno.textContent = contenidoTecla;
              pantallaGuardado.textContent =  pantalla.textContent;
              pantalla.textContent = undefined;
            }
          }
        break;
        case 'decimal':
            if( Boolean(!numActivo.includes("."))) {
              pantalla.textContent = pantalla.textContent + contenidoTecla
            }
          break;
        case 'borrartodo':
            pantallaSigno.textContent = undefined;
            pantallaGuardado.textContent =  undefined;
            pantalla.textContent = undefined;
          break;
        case 'borrar':
            pantalla.textContent = Math.floor(pantalla.textContent / 10);
          break;
        case 'igual':
          switch(accionsigno){
            case 'sumar':
              if(pantalla.textContent.length == 0){
              }
              else{
                pantallaGuardado.textContent = parseFloat(pantallaGuardado.textContent) + parseFloat(pantalla.textContent);
                pantallaSigno.textContent = undefined;
                pantalla.textContent = undefined; 
                accionsigno = undefined;
              }   
            break;
            case 'restar':
              if(pantalla.textContent.length == 0){
              }
              else{
                pantallaGuardado.textContent = parseFloat(pantallaGuardado.textContent) - parseFloat(pantalla.textContent);
                pantallaSigno.textContent = undefined;
                pantalla.textContent = undefined;
                accionsigno = undefined;
              }   
            break;
            case 'multiplicar':
              if(accionsigno === 'multiplicar'){
                if(pantalla.textContent.length == 0){
                }
                else{
                  pantallaGuardado.textContent = parseFloat(pantallaGuardado.textContent) * parseFloat(pantalla.textContent);
                  pantallaSigno.textContent = undefined;
                  pantalla.textContent = undefined;
                  accionsigno = undefined;
                }  
              }
            break;
              case 'dividir':
                if(accionsigno === 'dividir'){
                  if(pantalla.textContent == 0 || pantalla.textContent.length == 0){
                  }
                  else{
                  pantallaGuardado.textContent = parseFloat(pantallaGuardado.textContent) / parseFloat(pantalla.textContent);
                  pantallaSigno.textContent = undefined;
                  pantalla.textContent = undefined; 
                  accionsigno = undefined;               
                  }
                }
                break;
          }
          break;
        case 'cambio':
            if(numActivo > 0){
              pantalla.textContent = -Math.abs(pantalla.textContent);
            }
            else if (numActivo < 0 ){
              pantalla.textContent = Math.abs(pantalla.textContent);
            }
          break;
        default:
          if(Boolean(!pantallaSigno.textContent) && Boolean(pantallaGuardado.textContent)){
          }
          else{
            if (numActivo == 0) {
              pantalla.textContent = contenidoTecla
            }
            else{
                pantalla.textContent = pantalla.textContent + contenidoTecla
            }
          }
        break;   
      }}})