( function () {    // Fonction qui s'auto-appelle pour éviter collision et sécurité
    // Définition de la valeur du statut d'execution de la fonction de débugage de l'animation : 
    let activationDebugStatus = false;

/* ================================================ Variables ================================================*/

const navContainer = document.querySelector( ".navContainer" );                 // Sélection cu conteur de nav
const btnBurger = document.querySelector( ".btnBurger" );                       // Sélection du menu Burger
const btnClose = document.querySelector( ".btnClose" );                         // Sélection de la croix de fermeture de la nav

    
/* =================================== écouteurs / déclencheur d'évènements ===================================*/

// Toggle de la nav :
    // à partir du bouton burger
    btnBurger.addEventListener( "click", toggleNav );                           // ajout d'un écouteur d'évènement à partir du bouton burger
    // à partir du bouton de fermeture (croix)
    btnClose.addEventListener( "click", toggleNav );                            // à partir du bouton croix de fermeture


/* ================================================= Fonctions =================================================*/
    // fonction de toggle de la nav
    function toggleNav(){
        if (navContainer.classList.contains( "hideMenu" )){                     // Si le conteneur de la nav contient la classe "hideMenu"
            navContainer.classList.remove( "hideMenu" );                        // Supprime la classe "hideMenu"
            navContainer.classList.toggle( "isHidden" );                        // Toggle la classe la classe "isHidden" qui définit le statut d'affichage de la nav
        } else {                                                                // Sinon
            navContainer.classList.toggle( "isHidden" );                        // Toggle directement la classe la classe "isHidden" qui définit le statut d'affichage de la nav
        }
    }

    // On appelle la fonction hashchange dés le démarrage de la page
    // fonction d'execution de la fonction de débugage : en fonction de la valeur du statut, affiche les valeurs de débugage dans la console. Ne s'excute que si la valeur est modifiée manuellement sur "true"
    function debugLanch() {
        if ( activationDebugStatus !== false ) {                                     // Si le statut de lancement de la fonction de débugage n'est pas faux,
            activationDebug();                                                       //  lance le débugage
        }
    }


    // fonction de débugage dans la console : en fonction de la valeur du statut,
    function activationDebug() {

        console.log( "navContainer", navContainer );
        console.log( "btnBurger", btnBurger );
        console.log("btnClose",btnClose);
    }

    /* ========== appel des fonctions ========== */
    // appel de la fonction d'execution de la fonction de débugage
    debugLanch()


})()
