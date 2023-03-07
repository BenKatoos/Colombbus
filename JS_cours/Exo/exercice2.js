//----------------------------------😊-----------------------------------//
//--------------------------------
// //Exercice  10:
//--------------------------------


/*
 Ecrivez un programme qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.
 Les erreurs de saisie (jour incorrect) doivent être gérées.
 Effectuez l'exercice avec des if/if else puis avec un switch.
 */
/*
let jour = prompt("Quels jours sommes nous ?").toLowerCase();
console.log(jour);
*/
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
/*
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


*/
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
/*
let mois = parseInt(prompt('Choisissez un mois :', 'saisir un numéro entre 1 et 12'));
let moisNom = ['', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
*/
/*
if (isNaN(mois)) { // si la personne ne rentre pas un nombre
    document.getElementById('p2').innerHTML = 'Vous n\'avez pas mis un chiffre';
} 
else {// ici c'est forcément un nombre
    if (mois == 2) { // si la personne répond 2
       document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 28 jours.';
    } 
    else if ((mois == 4) || (mois == 6) || (mois == 9) || (mois == 11)) { // si la personne répond 4 / 6 / 9 / 11
        document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 30 jours.';
       } 
    else if ((mois == 1) || (mois == 3) || (mois == 5) || (mois == 7) || (mois == 8) || (mois == 10) || (mois == 12)) { // si la personne répond 1 / 3 / 5 / 7 / 8 / 10 / 12
        document.getElementById('p2').innerHTML = 'Le mois n°' + mois + ', ' + moisNom[mois] + ', fait 31 jours.';
    } 
    else {
         document.getElementById('p2').innerHTML = 'Vous devez saisir un nombre entre 1 et 12.';
     }
}
*/
/*
console.log(moisNom.length);

const TAB1 =[4,6,9,11];
const TAB2 = [1,3,5,7,8,10,12];
const FEV = 2

if (isNaN(mois)) { // si la personne ne rentre pas un nombre
          document.getElementById('p2').innerHTML = 'Vous n\'avez pas mis un chiffre';
} 
else {// ici c'est forcément un nombre

    for(let i=0; i<= moisNom.length; i++){
                              //4
        if(TAB1.includes(mois)){
            document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 30 jours.`;
        }
        else if(TAB2.includes(mois)){
            document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 31 jours.`;
        }else if( mois === 2){
            document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 28 jours.`;
        }
        else{
            document.getElementById('p2').innerText = `vous devez saisir un nombre entre 1 et 12 `;

        }

        }
             
    }
*/

    
//--------------------------------
// //Exercice  12:
//--------------------------------

/*
A partir du tableau fourni, vous devez mettre en place un système d'authentification.
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et son prénom (document.write);
En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
ar BaseDeDonnees = [
            {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
            {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
            {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
        ];
*/
/*
let BaseDeDonnees = [
    {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
    {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
    {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
];

let email = prompt("Saisissez votre adresse mail");
let mdp = prompt("Saisissez votre mots de passe");
for(let i = 0; i < BaseDeDonnees.length; i++){
    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp){
        document.write("Bienvenue ", BaseDeDonnees[i].prenom, " ", BaseDeDonnees[i].nom);
    }
    else{
        document.write("Vos identifiants sont incorrectes !!");
    }
    break;
}
*/



//--------------------------------
// //Exercice  13:

//--------------------------------

/*
    Ecrivez un programme  qui permet à l'utilisateur de deviner un nombre entier compris entre 0 et 100 générer automatiquement et aléatoirement en JS
    l'utilisateur a droit 6 essais
     - en cas de réussite -> message affiche sur la page: Vous avez gagné, bravo ! La réponse était bien " le nombre"
     - le nombre deviné est inférieur à à celui qui est généré  -> Visez plus haut !
     - le nombre deviné est supérieur à celui qui est généré -> visez plus bas !
     - n'oubliez pas de traiter les essais avec des erreurs (ex : l'utilisateur a choisit un nombre supérieur à 100 !!!)
*/

let nombreArrondi = parseInt(Math.random()*100);
          console.log(nombreArrondi);

     for(let i=1 ; i <= 6 ; i++){
          let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris e,tre 0 et 100, Attention vous avez 6 essais !'));
          if(choixUser === nombreArrondi){
               document.write("Vous avez gagné, bravo la réponse était bien " + nombreArrondi+ '.' );
               break
          }
          else {
               if(choixUser < 0 || choixUser > 100 || isNaN(choixUser)){
                         alert('Vous devez saisir un nombre compris entre 0 et 100 !' + i  +'/6');
                    i--; // ici on décrémente i car l'uilisateur n'a pas rentré une valeur compris entre 0 et 100 -> ça ne compte pas dans les essais ( si je suis sur le 3 ème essai je ne perds ma position )
               }else if(choixUser > nombreArrondi){
                    alert('Visez plus bas ! '  + i  +'/6');
               }else if(choixUser < nombreArrondi) {
                    alert('Visez plus haut !'  + i  +'/6');
               }else{
                    alert("Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était" + nombreArrondi+ '.' );
               }  
          }
     }