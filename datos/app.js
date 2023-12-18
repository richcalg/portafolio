


var producto = [];

function guardarPersona() {

    let formtitle = document.getElementById('title').value;
    let formdesc = document.getElementById('desc').value;
    let formval = document.getElementById('precio').value;

    let prod = {
        titulo : formtitle,
        descripcion : formdesc,
        valor :formval
    }
    producto.push(prod)
    console.log(producto);


document.getElementById('form').reset();

    if(formtitle !=='' && (formdesc !=='' )){

    if (formval !=='')   {

    var fila = "<tr><td>"+formtitle+"</td><tr>"+formdesc+"</td><td>"+formval+"</td><tr>";

    var col = document.createElement("TR");

    col.innerHTML=fila;

    document.getElementById("table").appendChild(col);
    document.getElementById("table").appendChild(celda);
      
    }
}
        
    
    
       

    } 


