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
        if (!isNaN(prenom) || !isNaN(nom)) {

            info.innerHTML = `<p class="alert alert-danger"> Le nom ou le prénom est invalide </p>`;
            if (!isNaN(prenom) && !isNaN(nom)) {
                event.target.prenom.classList.add('error');
                event.target.nom.classList.add('error');

            }
            else if (!isNaN(prenom)) {
                event.target.prenom.classList.add('error');
                event.target.nom.classList.remove('error');
            }
            else if (!isNaN(nom)) {
                event.target.nom.classList.add('error');
                event.target.prenom.classList.remove('error');
            }
        }
        else {
            info.innerHTML = ``;
            event.target.nom.classList.remove('error');
            event.target.prenom.classList.remove('error');

            // Validation prenom

            if (prenom.length < 3) {
                erreur[0].innerHTML = `<div class="alert alert-danger"> ! Le prénom doit comporter 3 caractères minimum.</div>`

                event.target.prenom.classList.add('error');
                event.target.prenom.classList.remove('valid');
            }
            else {
                event.target.prenom.classList.remove('error');
                event.target.prenom.classList.add('valid');
                erreur[0].innerHTML = ``;
            }

            // Validation prenom

            if (nom.length < 3) {
                erreur[1].innerHTML = `<div class="alert alert-danger"> ! Le nom doit comporter 3 caractères minimum.</div>`
                event.target.nom.classList.add('error');
                event.target.nom.classList.remove('valid');
            }
            else {
                event.target.nom.classList.remove('error');
                event.target.nom.classList.add('valid');
                erreur[1].innerHTML = ``;
            }
        }

        // Validation email

        // regex raccourci de regular expression: c'est un moyen de définir ce qui est accepté ou non comme caractères. Le regex qui suit sert à définir ce qui est accepté en terme d'email
        let myRegexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,6}$/;
        // ^ indique le début : ma chaîne commence par
        // [] définissent un intervalle de caractères
        //  + une ou plusieur occurences de l'expression a-zA-Z0-9._-
        // \ indique que le caractère qui suit doit être recherché en tant que tel (ici le .)
        // $ indique la fin : 

        if (!myRegexEmail.test(email)) {     // la méthode test() vérifie s'il y'a une correspondance entre le contenue de la variable email et l'expression régulière
            event.target.email.classList.add('error');
            event.target.email.classList.remove('valid');
            erreur[2].innerHTML = `<div class="alert alert-danger>! L'email n'est pas valide </div>`;
        }
        else {
            event.target.email.classList.remove('error');
            event.target.email.classList.add('valid');
            erreur[2].innerHTML = ``;
        }

        // Validation du mots de passe

        let myRegexmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!&#])\S{6,12}$/;

        // (?=.*[a-z]) permet de tester la présence de lettre minuscul
        // (?=.*[A-Z]) permet de tester la présence de lettre majuscule
        // (?=.*[0-9]) permet de tester la présence de nombre/chiffre
        // (?=.*[$@!&#]) permet de tester la présence de caractère spéciaux parmis ceux indiquer
        // \S{6,12} permet d'initialisé le nombre minimum et maximum de caractères

        if (!myRegexmdp.test(mdp)) {

            event.target.mdp.classList.add('error');
            event.target.mdp.classList.remove('valid');
            erreur[3].innerHTML = `<div class="alert alert-danger>! Le mots de passe n'est pas valide </div>`;
        }
        else {
            event.target.mdp.classList.remove('error');
            event.target.mdp.classList.add('valid');
            erreur[3].innerHTML = ``;
        }


        if (confmdp == mdp) {
            event.target.confmdp.classList.remove('error');
            event.target.confmdp.classList.add('valid');
            erreur[4].innerHTML = ``;
        }
        else {
            event.target.confmdp.classList.add('error');
            event.target.confmdp.classList.remove('valid');
            erreur[4].innerHTML = `<div class="alert alert-danger"> Les mots de passe ne coresspondent pas</div>`;
        }
    }

}

