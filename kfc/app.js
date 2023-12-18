function cambiartema(){

    const color = document.getElementById('color').value;
    console.log(color)


if(color == "claro"){
    document.getElementById("theme").removeAttribute("data-bs-theme");
    document.getElementById("theme").setAttribute("data-bs-theme", "ligth");

}else{
    document.getElementById("theme").removeAttribute("data-bs-theme");
    document.getElementById("theme").setAttribute("data-bs-theme" , "dark");  

}







}