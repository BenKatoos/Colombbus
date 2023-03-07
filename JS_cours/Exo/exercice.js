//////-------------------
/// Exercice 1
//////-------------------


/// 2 Utilisateurs viennent de s'inscrire sur votre site.
/// Le premier est : Jean, 58 ans
/// Le deuxième est : Xavier , 32 ans
/// créez des variables prénoms et age pour chacun
/// Et les afficher dans la console


/*let prenomJ = 'Jean';
let prenomX = 'Xavier';
let ageJ = 58;
let ageX = 32;
console.log(prenomJ, ageJ);
console.log(prenomX, ageX);
*/


//////-------------------
/// Exercice 2
//////-------------------


/// Génerer une phrase à l'aide de 2 variable, qui sera : "Bonjour ......, tu as ...... ans"
/// Afficher cette string dans le terminal avec console.log()

/*console.log(`Bonjour, ${prenomJ} !!! Tu as ${ageJ} ans.`);
console.log(typeof prenomJ);*/


//////-------------------
/// Exercice 3
//////-------------------


// Demander à l'utilisateur son prénom via un prompt
// Afficher dans la page : Bonjour "prénom de l'utilisateur"
// Demander à l'utilisateur de saisir 2 nombres entiers
// Afficher le résultat de l'addition de ces chiffres.
/*
let prenom = prompt("Saisissez votre prénom");
document.write("Bonjour,", prenom, ". <br>");
let nbEntier = parseFloat(prompt("Saisissez un nombre entier"));
let nbEntier2 = parseFloat(prompt("Saisissez à nouveau un nombre entier"));
document.write("La somme de ces nombres est :", nbEntier + nbEntier2, '<br>');
console.log(typeof nbEntier2);*/

//////-------------------
/// Exercice 4
//////-------------------

// Demander à l'utilisateru son age
// on utilise la condition IF  pour vérifier l'âge de l'utilisateur
// -> s'il est majeur je lui souhaite la bienvenue.
// => s'il est mineur je lui conseil de faire dodo

/*
// 1| Ask the age of the user client
let ageee = parseFloat(prompt("Saisissez votre âge"));
// 2|
console.log(typeof (ageee));
if (ageee >= 18) {
    document.write("Bienvenue");
}
else if (ageee < 18) {
    document.write("Va dormir");
}
else {
    document.write("Saisie un nombre")
}
*/


/*let votreAge = parseFloat(prompt("Veuillez entrer votre âge"));
let ageLimite = 18;
if (votreAge >= ageLimite && Number.isInteger(votreAge)) {
    alert('Vous êtes la bienvenue');
}
else if (votreAge < ageLimite && Number.isInteger(votreAge)) {
    alert('Va faire dodo');
}
else {
    alert('Votre âge n\'est pas valide');
}
*/

//////-------------------
/// Exercice 5
//////-------------------

// J'arrive sur un espace sécurisé au moyen du prénom et de l'âge.
// Je dois saisir mon prénom et mon age pour être authentifié sur le site (ces informations seront préalablement stockée dans des variables age et prénoms)
// en cas d'echec une alerte m'informe du problème
// Si tout se passe bien un message de bienvenue m'accueille
/*
let value1, value2;
let name = prompt("Saisissez votre prénom");
name = name.toUpperCase();
switch (name) {
    case "MARY":
        value1 = 1;
        break
    default:
        value1 = 0;
        break
}
let anos = parseFloat(prompt("Saisissez votre age"));
switch (anos) {
    case 22:
        value2 = 1;
        break
    default:
        value2 = 0;
        break
}
if (value1 == 1 && value2 == 1) {
    document.write("Bienvenue <br>");
}
else {
    alert("Information erroné");
}

//////-------------------
/// Exercice 6
//////-------------------

// Utilisez la méthode slice : tranche pour renvoyer le mot "bananas"
let txt = "I can eat bananas all day";
let result = txt.slice(10, 17); // coupe jusqu'au 10ème caractère et reprend a partir du 17ème
document.write(result);//renvoie bananas

// alerter le nombre d'éléments dans un tableau en utilisant la bonne méthode
let cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);


// Utilisez splice () méthode pour supprimer "Orange" et "Apple" de fruits
let fruits = ["Banane", "Orange", "Pomme", "Kiwi"];
fruits.splice(1, 2);
console.log(fruits);

// Choisissez l'opérateur conditionnel ternaire correct pour alerter "trop jeune" si l'age est inférieur à 18 ans , sinon alerter "assez vieux"
let mineur = prompt("Saisissez votre âge");
let majeur = (mineur < 18) ? alert("Trop jeune") : alert("assez vieux");

// On reçoit un nombre par exemple var number = 42; Comment savoir de combien d'unité (2) est composé ce nombre ? Avec l'opérateur moduolo !
// 68 => renvoie 8
let number = parseFloat(prompt("Saisissez un nombre"));
let unite = number % 10;
console.log(unite);
let dizaines = (number - unite) / 10;
console.log(dizaines);

// Utilisez la méthode string correct pour remplacer le mot "hello" par le mort "Welcome"

let txt2 = "Hello World";
txt2 = txt2.replace("Hello", "Welcome");
console.log(txt2);

// Utilisez des caractères d'échappement pour alerter (we are "vikings")
alert("We are \"Vikings\" !!!");
*/

//////-------------------
/// Exercice 7
//////-------------------

/*
    J'ai 1000€ sur mon compte chaque mois j'ajoute 50€ Combien de temps me faut il pour atteindre 2000€ ?
*/


// Avec la boucle while
/*
let soldeCompte = 1000;
let nbrMois = 0;
while (soldeCompte < 2000) {
    soldeCompte += 50;
    nbrMois++
    document.write("<p>Ce mois, j'ai sur mon compte : </p>" + soldeCompte);
}
document.write("<p> Pour atteindre la somme de 2000€, il me faut : " + nbrMois + " mois</p>");

// Avec la boucle for
let mois = -1;
for (let solde = 1000; solde <= 2000; solde += 50) {
    document.write("<p>Ce mois, j'ai sur mon compte : " + solde + "</p>");
    mois++
}
document.write("<p> Pour atteindre la somme de 2000€, il me faut : " + mois + " mois</p>");
*/


//Exercice
// Réaliser une fonction permettant à un internaute de :
// - Saisir son Prénom dans un Prompt
// - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
// - Saisir son Age
// - Afficher ensuite un récapitulatif dans la page.
// Bonjour [PRENOM], tu as [AGE] !
// En cas d'échec une alert m'informera le problème.

/*
function hello() {
    let prenom = prompt("Quel est votre prénom ?");
    if (prenom !== ' ' && isNaN(prenom)) {
        let age = parseFloat(prompt(`Bonjour ${prenom}, Quel age as-tu ?`));
        if (age !== null && !isNaN(age)) {
            document.write(`Tu t'appele ${prenom}, tu as ${age} ans !!`);
        }
        else {
            alert("Vous n'avez pas inscrit un nombre")
        }
    }
    else {
        alert("Vous n'avez pas inscrit votre prénom.")
    }

}
hello();

*/

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
    let jourUtilisateur = prompt("Saisissez un jour de la semaine").toUpperCase();
    console.log(jourUtilisateur);

    switch (jourUtilisateur){
        case "LUNDI":
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
*/

/*
        if (jourUtilisateur == "LUNDI"){
            document.write("Mardi");
        }
        else if (jourUtilisateur=="MARDI"){
            document.write("Mercredi");
        }
        else if (jourUtilisateur=="MERCREDI"){
            document.write("Jeudi");
        }
        else if (jourUtilisateur=="JEUDI"){
            document.write("Vendredi");
        }
        else if (jourUtilisateur=="VENDREDI"){
            document.write("Samedi");
        }
        else if (jourUtilisateur=="SAMEDI"){
            document.write("Dimanche");
        }
        else if (jourUtilisateur=="DIMANCHE"){
            document.write("Lundi");
        }
        else{
            alert("Erreur d'orthographe. Saisissez à nouveau votre jour souhaité");
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
let jourMois= prompt("Saisissez le numéro du mois");
if (jourMois == "1"){
    document.write("mois de janvier => 31 jours");
}
else if (jourMois=="2"){
    document.write("mois de février => 28 jours");
}
else if (jourMois=="3"){
    document.write("mois de mars => 31 jours");
}
else if (jourMois=="4"){
    document.write("mois de avril => 30 jours");
}
else if (jourMois=="5"){
    document.write("mois de mai => 31 jours");
}
else if (jourMois=="6"){
    document.write("mois de juin => 30 jours");
}
else if (jourMois=="7"){
    document.write("mois de juillet => 31 jours");
}
else if (jourMois=="8"){
    document.write("mois de âout => 31 jours");
}
else if (jourMois=="9"){
    document.write("mois de septembre => 30 jours");
}
else if (jourMois=="10"){
    document.write("mois de octobre => 31 jours");
}
else if (jourMois=="11"){
    document.write("mois de novembre => 30 jours");
}
else if (jourMois=="12"){
    document.write("mois de décembre => 31 jours");
}
else{
    alert("Aucun mois n'est associé à ce numéro");
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
    { prenom: "Tom", nom: "Lechat", email: "tom.lechat@gmail.com", mdp: "poisson!" },
    { prenom: "Jerry", nom: "Lasouris", email: "jerry.lasouris@gmail.com", mdp: "fromage!" },
    { prenom: "twity", nom: "Lecanard", email: "twity.lecanard@gmail.com", mdp: "mignon!" }
];
let email = prompt("Saisissez votre adresse mail");
email = email;
let mdp = prompt("Saisissez votre mots de passe")
mdp = mdp;

if (email == BaseDeDonnees[0].email && mdp == BaseDeDonnees[0].mdp) {
    document.write("Bienvenue ", BaseDeDonnees[0].nom, " ", BaseDeDonnees[0].prenom);
}
else if (email == BaseDeDonnees[1].email && mdp == BaseDeDonnees[1].mdp) {
    document.write("Bienvenue ", BaseDeDonnees[1].nom, " ", BaseDeDonnees[1].prenom);
}
else if (email == BaseDeDonnees[2].email && mdp == BaseDeDonnees[2].mdp) {
    document.write("Bienvenue ", BaseDeDonnees[2].nom, " ", BaseDeDonnees[2].prenom);
}
else {
    document.write("Vos identifiants sont incorrectes !!");
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
/*

let nbrAleatoire = Math.random() * 100;
nbrAleatoire = Math.round(nbrAleatoire);
console.log(nbrAleatoire);

for (let i = 0; i <= 6; i++) {
    nbrUsers = prompt("Devenez le nombre");
    if (nbrAleatoire == nbrUsers) {
        alert("Vous avez gagné, bravo! La réponse était bien" + ' ' + nbrUsers);
    }
    else if (nbrAleatoire > nbrUsers) {
        alert("Visez plus haut !");
    }
    else if (nbrUsers > nbrAleatoire) {
        alert("Visez plus bas !");
    }
    else {
        alert("Vous avez saisie un nombre supérieur à 100.");
    }
}
*/


//--------------------------------
// //Exercice  14:

//--------------------------------

/*
   // Via Javascript :
   // Écrivez le contenu de tous les éléments HTML de la page exercice.html et renseignez leurs attributs ;
   //Remplacer la --> avec votre réponse

   // Première Section
           -->

   // Seconde Section
           -->

   // Donnez à l'image une largeur de 600px ;
           -->

   // Donnez aux sections : un padding et une couleur de fond ;
           -->

   // Créez une troisième section qui aura une classe et qui comprend : un titre 2, un paragraphe et un boutton ;
           -->

   // Ajoutez les flexbox à cette section : le contenu doit être centré verticalement et horizontalement.
           -->

  */








