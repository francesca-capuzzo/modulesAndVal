//EVAL è in grado di beccare qualsiasi stringa e se ha del codice da eseguire nella stringa al suo interno, lo esegue!!


// let value = 5;

// function myLog(variableToLog, someCode) {
//     eval(someCode);
//     console.log(variableToLog);
// }

// myLog(value, "variableToLog = 6; console.log('ti ho fregato');"); //--> result "ti ho fregato" 6

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch("./conf.json").then(result => result.json()).then(executeConf);

// const fs = require("fs");

// fs.readFile("./conf.json", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     let json = JSON.parse(data);
//     executeConf(json);
// });



// function executeConf(jsonArray) {
//     for (const element of jsonArray) {
//         let array = element.input;
//         eval(element.code);
//     }
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const pippo = require("./myMath.js");

console.log(pippo.sum(3, 4));

console.log(pippo.pow(3, 2));

console.log(Math.pow(3, 2)); //--> qui usa la class MATH di javascript e funziona

console.log(Math.sqrt(3, 2)); //--> qui usa la class MATH di javascript e funziona


// const Math = require("./myMath.js");

// console.log(Math.sum(3, 4));

// console.log(Math.pow(3, 2));

// console.log(Math.sqrt(3, 2)); //--> qui usa la class MIA class Math definita a linea 49 e si rompe perchè non ha la funzione sqrt 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const helper = require("./caseHelper.js");

console.log(helper.splitCamelCase("laCasaRosa"));

//CI SONO ALTRI 2 MODI PER ESPORTARE FILE E UTILIZZARLI NELLO SCRIPT:
/*MODO BASE: 

const name = require("./filename");*/


//MODO 1 (più vecchio):

function helper2() {
    function startingUpperCase(string) {
        return string[0].toUpperCase() + string.substring(1);
    }
    
    function splitCamelCase(string) {
        let newString = "";
        for (const char of string) {
            if (char === char.toUpperCase()) {
                newString += " " + char.toLowerCase(); 
            } else {
                newString += char;
            }
        }
        return newString;
    }
    return {startingUpperCase, splitCamelCase}    //--> questo è come nel caso del module.export = {modules} 
}


const h2 = helper2();

console.log(helper.splitCamelCase("laCasaRosa")); //--> chiama al module dentro a caseHelper --> helper()
console.log(h2.splitCamelCase("laCasaRosa"));  //--> chiama la costante h2 che contiene le funzioni che sono in helper2()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const csv = require("csv-parser");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

const result = [];

fs.createReadStream("data.csv").pipe(csv()).on("data", (data) => resourceLimits.push(data)).on("end", () => {
    console.log(result);
})