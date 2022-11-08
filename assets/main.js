// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// const array2 =[];

// let min = prompt("inserisci numero minimo");
// let max = prompt("inserisci numero massimo")

// myArray.forEach((element,index) => {
//     if(index >= min && index <= max){
//         array2.push(element)
//     }
// });
// console.log(array2)


// const array3 = myArray.filter((element,index)=>{
//     if(index >= min && index <= max){
//         return true;
//     }
// })

// console.log(array3)



// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4.



// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];

//   console.log("array iniziale",students)
// // 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.


// const arr2 = students.map( ({name,id,grades,}) => {
//    name = name.toUpperCase()
//     return{name,id,grades}
    
//   } )

//   console.log("array con maiuscole",arr2)


// // 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70


// const arr3 = arr2.filter((element)=>{
//     if(element.grades >= 70){
//         return true
    
// }
// })

// console.log("array filtrato per voti",arr3)
// // 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// const arr4 = students.filter((element)=>{
//     if(element.grades >= 70 && element.id >= 120){
//         return true
// }
// })

// console.log("array filtrato per nomi e gradi",arr4)


// Snack 3:
let display = document.getElementById("output")
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bike = [{
    nome:"bmc",
    peso: 20,
},
{

    nome:"orbea",
    peso: 10,
}];

const min = bike[0];
const max = bike[1]




const arrai2 = bike.map(({nome, peso})=>{
    
    if (peso < min.peso) {
        display.innerHTML=`la bici che pesa meno è <strong>${nome}</strong> e pesa  <strong>${peso}</strong> kg`
    }else if(peso < max.peso){
        display.innerHTML=`la bici che pesa meno è <strong>${nome}</strong> e pesa  <strong>${peso}</strong> kg`
    }
})



// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//     const teams =[{
//         nome:"napoli",
//         punti:0,
//         falli:0,
//     },
//     {
//         nome:"milan",
//         punti:0,
//         falli:0,
//     },
//     {
//         nome:"inter",
//         punti:0,
//         falli:0,
//     }
// ];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//  Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// function numerorandom (min, max){
// let random = Math.floor(Math.random() * max - min + 1);
// return random
// }



// const arraiu = teams.map(({nome, punti, falli})=>{
// punti = numerorandom (1, 10);
// falli = numerorandom (1, 10);
// return {nome, punti, falli}
// });

// console.log(arraiu);











