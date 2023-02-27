//////-------------------
/// Exercice 1
//////-------------------


/// 2 Utilisateurs viennent de s'inscrire sur votre site.
/// Le premier est : Jean, 58 ans
/// Le deuxième est : Xavier , 32 ans
/// créez des variables prénoms et age pour chacun
/// Et les afficher dans la console

let prenomJ = 'Jean';
let prenomX = 'Xavier';
let ageJ = 58;
let ageX = 32;
console.log(prenomJ, ageJ);
console.log(prenomX, ageX);


//////-------------------
/// Exercice 2
//////-------------------


/// Génerer une phrase à l'aide de 2 variable, qui sera : "Bonjour ......, tu as ...... ans"
/// Afficher cette string dans le terminal avec console.log()

console.log(`Bonjour, ${prenomJ} !!! Tu as ${ageJ} ans.`);
console.log(typeof prenomJ);


//////-------------------
/// Exercice 3
//////-------------------


// Demander à l'utilisateur son prénom via un prompt
// Afficher dans la page : Bonjour "prénom de l'utilisateur"
// Demander à l'utilisateur de saisir 2 nombres entiers
// Afficher le résultat de l'addition de ces chiffres.

let prenom = prompt("Saisissez votre prénom");
document.write("Bonjour,", prenom, ". <br>");
let nbEntier = parseFloat(prompt("Saisissez un nombre entier"));
let nbEntier2 = parseFloat(prompt("Saisissez à nouveau un nombre entier"));
document.write("La somme de ces nombres est :", nbEntier + nbEntier2);
console.log(typeof nbEntier2);
