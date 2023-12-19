
function inicio(){
const persons = [
    {
        nombre : "Manuela Madrid",
        correo : "manuela@gmail.com",
        genero : "femenino",
        password : "123",
        images : [
             './images/img-1.jpg',
             './images/img-2.jpeg',
             './images/img-3.jpg',
             './images/img-4.jpg',
             './images/img-5.webp',
             './images/img-6.jpg',
             './images/img-7.jpg',
             './images/img-8.jpg',
             './images/img-9.webp',
             './images/img-10.jpeg',
        ]
    },
    {
        nombre : "Samuel",
        correo : "samuel@gmail.com",
        genero : "masculino",
        password : "123",
        images : [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            './images/img-20.jpg',
        ]
    }
];




    let correo = document.getElementById('mail').value;
    let password = document.getElementById('pass').value;

    persons.forEach(function(user) {

        if (correo === user.correo && password === user.password) {

            sessionStorage.setItem('nombre' , persons.nombre);
            sessionStorage.setItem('auth' , 1);
            window.location.href = 'perfil.html';

        

        }else{

            


        }

    });

}