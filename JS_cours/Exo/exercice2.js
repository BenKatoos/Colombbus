//----------------------------------😊-----------------------------------//
//--------------------------------
// //Exercice  10:
//--------------------------------


/*
 Ecrivez un programme qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.
 Les erreurs de saisie (jour incorrect) doivent être gérées.
 Effectuez l'exercice avec des if/if else puis avec un switch.
 */

let jour = prompt("Quels jours sommes nous ?").toLowerCase();
console.log(jour);
switch (jour){
    case "lundi":
        document.write("Mardi");
        break;
    case "MARDI":
        document.write("Mercredi");
        break;
    case "MERCREDI":
        document.write("Jeudi");
        break;
    case "JEUDI":
        document.write("Vendredi");
        break;
    case "VENDREDI":
        document.write("Samedi");
        break;
    case "SAMEDI":
        document.write("Dimanche");
        break;
    case "DIMANCHE":
        document.write("Lundi");
        break;
    default:
        alert("Saisie incorectes");
        break;
    }
    