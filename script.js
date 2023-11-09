var num1=2
var num2=6
var tot=0
console.log("il valore della prima variabile è:",num1)
console.log("il valore della seconda variabile è:",num2)
tot= num1+num2
console.log("il valore del totale è:",tot)
var stringa="LUPO"

console.log("il valore della stringa è:",stringa)
stringa="bau"
console.log("il valore cambiato della stringa è:",stringa)
const pigreco=  3.1415926535
console.log("il valore della costante pigreco è:",pigreco)

var variabile2=6.90
total2=pigreco+variabile2
console.log("il valore cambiato del totale è:",total2)
//traccia 1
var v1=2
var v2=22
var v3=24
var v4=62
var v5=52
somma= v1+v2+v3+v4+v5
media=somma/5
console.log("lasomma tra i numeri equivale a:", somma,"e la media equivale a", media)
const anno_cor= 2023
const cent=100
var a_nasc1=1995
var a_nasc2=1963
età1= anno_cor-a_nasc1
età2=anno_cor-a_nasc2
rim1=cent-età1
rim2=cent-età2
console.log("hai",età1,"e ti mancano",rim1,"anni  per compiere 100 anni")
console.log("hai",età2,"e ti mancano",rim2,"anni  per compiere 100 anni")
//traccia 2
document.getElementById("button").onclick = function() {pinco()};

function pinco(){
var x=0
var y=0
x = parseInt(prompt("inserisci primo numero:"))
y = parseInt(prompt("inserisci secondo numero:"))

sommaV=x+y
sotV=x-y
divV=x/y
molV=x*y
potV=x**y
document.write("somma:",sommaV+" sottrazione:"+sotV+" divisione:"+divV+" moltiplicazione:"+molV+" potenza:"+potV)}
