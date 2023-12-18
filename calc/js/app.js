


function operaciones(){
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    let operaciones = document.getElementById('operacion').value;
    
   if(operaciones == 'suma'){
    var suma = parseFloat(numero1)+ parseFloat(numero2);
    document.getElementById('resultado').innerText ='tu resultado es:' + suma;
    } 

    if(operaciones == 'resta'){
    var resta = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById('resultado').innerText ='tu resultado es:' + resta;
    }

    if(operaciones == 'division'){
    var divi = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById('resultado').innerText ='tu resultado es:' + divi;
    }

    if(operaciones == 'multiplicacion'){
    var multi = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById('resultado').innerText ='tu resultado es:' + multi;
    }

    if(operaciones == 'Exponenciacion'){
    var expo = parseFloat(numero1) ** parseFloat(numero2)
    document.getElementById('resultado').innerText ='tu resultado es:' + expo;
            
    }
    else
  


        
}
function limpiar()
    
}


function limpiar(){

    document.getElementById('form').reset();
    document.getElementById('operacion').append('<option value="" selected disabled>Seleccionar...</option>');

}

/*function alertas(){

    if (operacion != " "){
        document.getElementById('numero1')classlist.add('is-valid');
        document.getElementById('numero2')classlist.add('is-valid');
        document.getElementById('operacion')classlist.add('is-valid');
        document.getElementById('numero1')classlist.remove('is-invalid');
        document.getElementById('numero2')classlist.remove('is-invalid');
        document.getElementById('operacion')classlist.remove('is-invalid');
        document.getElementById('rrespuesta').innerText ='todo esta bien';
        document.getElementById('boton').classList.add('btn btn-success mt-3 w-100)';
       

    }
    else
    document.getElementById('numero1')classlist.add('is-invalid');
    document.getElementById('numero2')classlist.add('is-invalid');
    document.getElementById('operacion')classlist.add('is-invalid');
    document.getElementById('numero1')classlist.remove('is-valid');
    document.getElementById('numero2')classlist.remove('is-valid');
    document.getElementById('operacion')classlist.remove('is-valid');
    document.getElementById('rrespuesta').innerText ='todo esta mal';
    document.getElementById('boton').classList.add('btn btn-primary mt-3 w-100)';
}*/