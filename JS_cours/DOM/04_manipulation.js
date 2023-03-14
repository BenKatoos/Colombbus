//------------- Validation Formulaire

// Je séléctionne mon formulaire d'inscription grâce à son id  => variable letInscription

let letInscription = document.querySelector('#form_inscription');
// console.log(letInscription);
letInscription.addEventListener('submit', inscription);

function inscription(event) {
    event.preventDefault();
    let info = document.querySelector('#info');
    let erreur = document.querySelectorAll('.erreur');
    let prenom = event.target.prenom.value;
    console.log(prenom);
}