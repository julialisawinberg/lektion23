/**
    regler för variabeler
    1.Kan inte vara ett  reserverat ord, alltså något som javascript använder sig av
    2. Namnen ska vara betydelsefulla, man ska förstå vad som menas
    3. kan inte starta med nummer, ex 1firstname
    4. får inte inehålla mellanslag eller bindestreck, ex first-name
    5. Case sensetive, vilket inebär att det kommer spela roll om man änvänder stor eller liten bokstav först så utgå från att första bokstaven är liten.
    använd inte å ä ö, försör håll dig till engelska, kan blanda men inte å ä ö

    rätt ex: First_name, firstName
    rel ex: First_name, first-name, 1first name
 */

// let first_name = "Julia";
// let last_name = "Winberg";
//konsol ger oss tillgågn till consol 
//log () är en funktion som skriver till consol
//en funktion som går att återanvända med någon fom av instruktioner

//console.log(first_name, last_name);

let my_name = "Julia"; //sträng
let hight = "168"; //nummer - numnber -int - heltal
let deci = "56.8756"; //decimal

// console.log(my_name);
// console.log(hight);
// console.log(deci);

//dakt att kolla skillnad på olika datatyper
let x = 50;
let y = 70;
let sum = x + y;
// console.log(sum);

//Pop-upp ruta i webbläsaren
// alert("Hej från alert!");
//pop-upp ruta med möjlighet till bekröftelse
// confirm("Vill du verkligen beräfta detta?");
//Pup-upp ruta med input fält, skcika tillbaka en string 
// prompt("Vad heter du?");
// let nameIn = prompt("Vad heter du?");
// console.log(nameIn);

//hur man kombinerar en sträng och en variabel
//Konkatenering, hur mna kombinarar npgot som är variabel och variabler
// console.log("Detta är summan: " + sum);
// console.log('Detta är summan: ' + sum);
// console.log('Detta är summan: ', sum);
// console.log(`Detta är summan: ${sum}`); //snyggast, det senaste

let msg = "tJohooo";
// console.log(msg);
msg = "Hej";
// console.log(msg);
//lägga till utan att skriva över det jag har
// msg = msg + " Din luring";
msg += " Din luring";
// console.log(msg);

//Låssas göra ett spel
let score = 0;
score += "10";
// console.log(`Din score är: ${score}`);
score -= 5;
// console.log(`Din score är: ${score}`);

//konstant får inte ändras och ska inte ändras
const pi = 3.14;
//boolien
let day = true;

//Ett lite mini program
// const fName = prompt("Vad heter du?")
// console.log(fName);
// let textMsg = `Hejsan hoppsan ${fName}!`;
// console.log(textMsg);
// textMsg += `Så kul att du hittade hit!`;
// console.log(textMsg);

//dokumnet ger oss tillgpng till vår index fil
//write skriver till vårt index fil
// document.write(`<h1>${textMsg}<h1/>`);

//MAtte
//plus +
//minus -
// delat med /
// mulitplicera *

// let getNember = prompt("Välj ett nummer");
// let newNumber = parseInt(getNember);
// console.log(getNember);
// console.log(newNumber);
let getNumber = parseFloat(prompt("Välj ett nummer"));
console.log(getNumber);