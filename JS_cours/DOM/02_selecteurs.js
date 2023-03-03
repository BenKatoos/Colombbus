//////-------------
// Première méthode
//////-------------
// pas utilisé

let select1 = titreNiveau1;
console.log(select1);

//////-------------------------------------------------------
// Deuxième méthode || getElementByid() : Selection via l'ID
//////-------------------------------------------------------

let select2 = document.getElementById('titreNiveau1');
console.log(select2);


//////---------------------------------------------------------------------
// Troisième méthode || getElementsByClassName() : Selection via la classe
//////---------------------------------------------------------------------

let selectClass = document.getElementsByClassName('selectClass');
console.log(selectClass);
// lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array (tableau) qui affichera dans la console avec l'intitulé HTMLCollection. Comme un tableau le premier élément aura comme index 0.
// Grâce à cet index, je pourrai viser un seul des éléments.
console.log(selectClass[1]);
// On va aller plus loin, en ciblant ce qui se trouve dans l'élément.
console.log(selectClass[1].innerHTML);
// innertHTML permet de définir le contenue de la balise et le sélectionner dans le but de l'identifier, modifier ou le manipuler autrement

// Exo
// Modifier le contenue du h2 qui a la classe aChanger : 'Je change de titre'
let aChanger = document.getElementsByClassName('aChanger');
aChanger[0].innerHTML = 'Je change le titre';


//////----------------------------------------
// Quatième méthode || getElementsByTagName()
//////----------------------------------------

let lesP = document.getElementsByTagName('p');
// On cherche tous les paraphraphe de notre page
// On récupère un array (tableau) d'éléments
console.log(lesP);
lesP[0].style.backgroundColor = 'hotpink';

// Exo
// Sélectionner le premier paragraphe et lui donner le style suivants: border-radius (20px) | color #fff
// padding 10px

lesP[0].style.borderRadius = '20px';
lesP[0].style.color = '#fff';
lesP[0].style.padding = '10px';
lesP[0].style.textAlign = 'center';


// Grâce à ma variablr dans lequelle j'ai sélectionner tous les p, je peux viser un seul des éléments grâce à son index. Pour faire du css, j'utilise la propriété style suivie des mêmes déclarations que j'utilise en css, avec du camelCase à la place du KebabCase
// La propriété style permet d'accerder finement au style qui concerneun élément particulier.


////////////////
//  1ère méthode
////////////////
/*
for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.textTransform = 'uppercase';
}
*/
////////////////
//  2ème méthode
////////////////
// boucle for of

for (let p of lesP) {
    p.style.textTransform = 'uppercase';
}


select2.style.backgroundColor = 'magenta';
select2.style.padding = '10px';
select2.style.color = '#fff';
select2.style.borderRadius = '20px';
select2.style.textAlign = 'center';


//////----------------------------------------
// Cinquième méthode || querySelector
//////----------------------------------------

let div = document.querySelector('div');
console.log(div);

div.style.border = '1px solid #000';
div.style.margin = '20px';
// la méthode querySelector retourne le 1er élément trouvé spécifié en paramètres
// l'avanatge de querySelector c'est qu'il utilise la syntaxe de selction css -> #monId .maClass h1



//////----------------------------------------
// Sixième méthode || querySelectorAll
//////----------------------------------------
// Sélectionne toute les balises en ensemble et retourne un array d'élément

let query = document.querySelectorAll('.selectClass');
// On a deux paragraphe qui ont la classe selectClass
console.log(query);
// on affiche le contenue du paragraphe 2 dans la console
console.log(query[1].innerHTML);

query[0].style.color = "blue";

let rajout = document.querySelector('div.col-4>p.selectClass');
console.log(rajout);
rajout.innerHTML = '<span>Je suis là</span>';


// CRÉATION D'UN NOUVEL ÉLÉMENT

let section = document.querySelector('section');
// pour créer un élément, nous utilisons la méthode createElement, puis nous l'intégrons dans le noeud
// souhaité.
let nouveauParaFin = document.createElement('p');
nouveauParaFin.innerText = 'chalalalala';

section.append(nouveauParaFin); // append() -> insert du contenue à la fin de la section (accepte tous les éléments)

// appendChild() : méthode ajoute un élément HTML enfant à la fin d'un élément parent n'accepte que les élément de type balise

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerText = "Coucou c'est moi";
section.prepend(nouveauParaDebut);
// prepend() insére du contenue au début de la section


// DÉPLACER UN ÉLÉMENT
// Pour déplacer un élément, il nous faut trois paramètres

// -> le parent
// -> l'élément à déplacer
// -> l'élément qui viens après

// le parent
let parent = document.querySelector('main');
// l'élément à déplacer
let sousTitre = document.querySelector('h2');
// l'élément qui viens après
let toMove = document.querySelector('h4');

parent.insertBefore(toMove, sousTitre);


// SUPPRIMER UN ÉLÉMENT

// Pour supprimer un élément, il nous faut deux paramètres

// -> le parent
// -> l'élément à supprimer

// Le parent

let ul = document.querySelector('ul');
// L'élément à supprimer

let li = document.getElementsByTagName('li')[1];
// pour supprimer on utilise .removeChild()

ul.removeChild(li);


// CRÉER UN ATTRIBUT ET SA VALEUR
// setAttribute() méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément.

let baliseA1 = document.querySelector('a');
baliseA1.setAttribute("monAttribut", "valeurAttribut");
// rajoute un attribut
console.log(baliseA1);

baliseA1.setAttribute("href", "attribut.html");
//changer la valeur de l'attribut
console.log(baliseA1);

let lesA = document.querySelectorAll('a');
// Ici pour récuperer l'attribut du troisème a dans la liste ul, il faute indiquer l'index 1 car le li[1] est supprimer de la DOM 
let valeurA2 = lesA[1].getAttribute("href");
console.log(valeurA2);

/*
    Autre méthodes pour manipuler les attributs
    -> hasAttribute() : teste la présence d'un attribut particulier pour un élément, cette méthode retourne une valeur booléenne (true or false) (ex : hasAttribute('id'))
    -> getAttributeNames() : renvoie les noms des attributs d'un élément sous forme d'un tableau
    (ex : h1.getAttributeNames())
    -> removeAttribute() : supprimer un attribut d'un élément (ex : p.removeAttribute("class"))
    -> attributes : liste les attributs d'un élément spécifié elle renvoie un objet avec les noms et les valeurs associés d'un élément

*/


// Exo
// grâce à votre script, créer une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet
// Ce lien sera de couleur Blanche et non souligné.



// 1ère méthode

select2.innerText = '';
// ou select2.innetText = null;

let petitA = document.createElement('a');
petitA.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
petitA.setAttribute("target", "_blank");
console.log(petitA);
select2.append(petitA);

petitA.innerText = "Cours JavaScript ";
petitA.style.color = "white";
petitA.style.textDecoration = "none";


// 2ème méthode
/*
select2.innerHTML = `<a href="https://developper.mozilla.org/fr/docs/Web/JavaScript" target="_blank">Cours Javascript</a>`;
let aH1 = document.querySelector('h1>a');
aH1.style.textDecoration = "none";
aH1.style.color = "white";
*/
