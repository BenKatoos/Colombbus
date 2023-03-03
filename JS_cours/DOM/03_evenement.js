/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : lasouris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*

    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>,   <select> et <textearea>
        submit   : à l'envoi du formulaire
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------
    Pour attacher un évènement à un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

// 1 /p #p1

// On place la fonction  Javascript qu'on veut executer à l'interieur de la balise ouvrante P
function fp1() {
    alert(`L'élément est clické`);
}

// 2 div #rouge

let divRouge = document.querySelector('#rouge');
// je selectionne ma div par son id ensuite je lui ajoute un écouteur d'évènement
divRouge.addEventListener('click', fDivRouge);
// L'écouteur d'évènement se décompose en deux arguments : 
//      -> l'action d'évènement ici le click
//      -> le nom de la fonction ici fDivRouge
function fDivRouge() {
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.innerHTML = "#gold";
}

// 3 div #orange
// avec une fonction anonyme

let divOrange = document.querySelector('#orange');
divOrange.addEventListener('dblclick', function () {
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.innerHTML = "#gold";
})

// 4 div #info
// avec une fonction anonyme // mouseover

let divInfo = document.querySelector('#info');
divInfo.addEventListener('mouseover', function () {
    divInfo.style.backgroundColor = "gold";
    divInfo.style.borderRadius = "50%";
    divInfo.innerHTML = "#gold";
})