//------------- Validation Formulaire

// Je séléctionne mon formulaire d'inscription grâce à son id  => variable letInscription

let letInscription = document.querySelector('#form_inscription');
// console.log(letInscription);
letInscription.addEventListener('submit', inscription);

function inscription(event) {
    event.preventDefault();
    let info = document.querySelector('#info');
    let erreur = document.querySelectorAll('.erreur');
    let prenom = event.target.prenom.value.trim(); // méthode supprime les espaces aux deux extrémités
    let nom = event.target.nom.value.trim();
    let email = event.target.email.value.trim();
    let mdp = event.target.mdp.value.trim();
    let confmdp = event.target.confmdp.value.trim();

    // je stock les données de mon formulaire dans un tableau
    let donnee = [prenom, nom, email, mdp, confmdp];
    // Si le tableau contient un élément avec chaîne de caractères vides
    if (donnee.includes('')) {
        info.innerHTML = `<p class="alert alert-danger">Tous les champs sont requis</p>`;
        for (let i = 0; i < event.target.length - 1; i++) {
            if (event.target[i].value === '') {
                event.target[i].classList.add('error');
            }
            else {
                event.target[i].classList.remove('error');
            }
        }
    }
    else {
        if (isNaN(prenom) || isNaN(nom)) {
            info.innerHTML = `<p class="alert alert-danger"> Le nom ou le prénom est invalide </p>`;
            if (!isNaN(prenom)) {
                event.target.prenom.classList.add('error');
            }
            if (!isNaN(nom)) {
                event.target.nom.classList.add('error');
            }
            else {
                event.target.prenom.classList.remove('error');
                event.target.nom.classList.add('error');
            }
        }
        else {

        }
    }
}

