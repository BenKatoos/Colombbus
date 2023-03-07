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
/*
switch (jour){
    case "lundi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Mardi";
        break;
    case "mardi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Mercredi";
        break;
    case "mercredi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Jeudi";
        break;
    case "jeudi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Vendredi";
        break;
    case "vendredi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Samedi";
        break;
    case "samedi":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Dimanche";
        break;
    case "dimanche":
        document.querySelector("#p1").innerText = "Nous sommes " + jour + ", demain nous serons Lundi";
        break;
    default:
        document.querySelector("#p1").innerText = "Vous avez rentré " + jour + ", ceci n'est pas un jour de la semaine";
        break;
    }
    */

let joursSemaine = ["lundi", "mardi", "mercredi","jeudi","vendredi","samedi","dimanche"];
                    //0       //1       //2       //3       //4      //5       //6

for(let i = 0; i < joursSemaine.length; i++ ) {
     
     if(joursSemaine.includes(jour)){
          
        i = joursSemaine.indexOf(jour)
        if(i == (joursSemaine.length - 1) ){
                document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes <strong>' + joursSemaine[i]  + '</strong>, demain nous serons ' + joursSemaine[0];
        }
        else{           
            document.getElementById('p1').innerHTML = 'Aujourd\'hui, nous sommes <strong>' + joursSemaine[i]  + '</strong>, demain nous serons ' + joursSemaine[i+1];
            }
     }
     else{
          document.getElementById('p1').innerHTML = 'Ceci n\'est pas un jour de la semaine';
     }
     break;
}




//--------------------------------
// //Exercice  11:
//--------------------------------

/*
Ecriver un programme JS qui permet à l'utilisateur d'insérer le numéro du mois et le programme lui réponds le nombre de jours
ex :
     mois février => 28 jours (on considére que c'est 28 toujpous ;-) )
     mois juin => 30 jours
     mois octobre = > 31jours
*/
    