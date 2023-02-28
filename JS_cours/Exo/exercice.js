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
