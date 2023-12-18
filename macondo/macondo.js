//casso 1

function comprar(){
let salario = 2500000;
let compra = prompt("1-almojabanagaseosa  2-subwaygaseosa elige una opcion:")
if (compra == 1 ){
    salario = salario - 15000;
    alert('has comprado una almojabana con gaseosa y tu saldo restante es:'+ salario)
if (compra == 2)
salario = salario - 230000;
aleert('has comprado un subway con gaseosa y tu saldo restante:'+ salario)
}

else{
alert('no has comprado nada + "este es tu saldo restante"+ salario')
}


}
comprar()
/*caso 2

let maletah = [60, 40,20]
let normal = [55, 40,20]

console.log(normal[1])
let factreduc = Math.min(normal[0]/maletah[0],normal[1]/maletah[1],normal[2]/maletah[2]);
console.log(factreduc);
let newaltura = maletah[0]*factreduc;
let newlength = parseInt(maletah[1]*factreduc);
let newwdith = parent(maletah[2]*factreduc);

console.log('${newlength}' '${newwidth}')*/

//caso3

function convertir(binario){
let decimal = 0

for (let index = 0,j =8; index < 8; index++, j--){

    console.log(decimal += Number(binario[index])) * Math.pow(2,j - 1)
}
return decimal
}

let wifi = 'elpassEs'
let passwordwifi = 01110010_01101001_01110111_01101001;
passwordwifi = passwordwifi.split("_");

let [ bin1,bin2, bin3, bin4] =passwordwifi;
bin1 = String.fromCharCode(convertir(bin1));
bin2 = String.fromCharCode(convertir(bin2));
bin3 = String.fromCharCode(convertir(bin3));
bin4 = String.fromCharCode(convertir(bin4));

let password = bin1 + bin2 + bin3 + bin4;


console.log(password)









/* caso 4
var letra = promt("escribe una vocal")

function hola(){
var hola ="axi me puede llevar al hotel mariposas amarillas"
var vocales = ['a', 'e', 'i', 'o', 'u']
vocales.forEach(vocales => {
hola = hola.replaceAll (vocales, letra)


});
console.log(hola)

}
hola()*/


/*caso 5

let options = ["piedra" , "papel" , "tijera"];

let taxista = math.floor ((math.random()*options.length));
console.log(taxista)
let hildebrando = math.floor ((math.random()*options.length));
let taxistawin = false;

if(options[hildebrando]) === "piedra" && options[taxista]=== "papel"){
    taxistawin = true;

if (options[hildebrando]) === "papel" && options[taxista]=== "tijera")
 taxistawin = true

 if (options[hildebrando]) === "tijera" && options[taxista]=== "piedra")
 taxistawin = true
}
if (taxistawin) {
 sueldo -= 300000
 console.log(' hildebrando has perdido'+ sueldo)

}
else{
    console.log("hildebrando no te debe nada")
}*/

// caso 6


/*function BinarioADecimal(num) {
    sum = 0
    var numReverse = num.split('').reverse().join('')
  
  
    for (i = 0; i < numReverse.length; i++) {
     console.log(`${sum} = ${sum}+${numReverse[i]} * 2 ** ${i} `)
      sum = sum + numReverse[i] * 2 ** i;
    }
    return sum;
  }
  
  console.log(BinarioADecimal("111"));*/