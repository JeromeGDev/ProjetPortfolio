( function () {    // Fonction qui s'auto-appelle pour éviter collision et sécurité
    // Définition de la valeur du statut d'execution de la fonction de débugage de l'animation : 
    let activationDebugStatus = false;
/* =============================== Vérification de formulaires =============================== */
 
// utilisation d'un regex de sécurité
let re = new RegExp("");
 
class RegExp1 extends RegExp {
    [Symbol.replace](str) {
      return RegExp.prototype[Symbol.replace].call(this, str, `#;"@?'/\``);
    }
  }
  
  console.log('football'.replace(new RegExp1('foo')));

const lastName = document.querySelector( "#lastName" );
const firstName = document.querySelector( "#firstName" );
const userMail = document.querySelector( "#userMail" );
const userTel = document.querySelector( "#userTel" );
const msgObject = document.querySelector( "#msgObject" );
const msgContent = document.querySelector( "#msgContent" );


    // On appelle la fonction hashchange dés le démarrage de la page
    // fonction d'execution de la fonction de débugage : en fonction de la valeur du statut, affiche les valeurs de débugage dans la console. Ne s'excute que si la valeur est modifiée manuellement sur "true"
    function debugLanch() {
        if ( activationDebugStatus !== false ) {                                     // Si le statut de lancement de la fonction de débugage n'est pas faux,
            activationDebug();                                                       //  lance le débugage
        }
    }


    // fonction de débugage dans la console : en fonction de la valeur du statut,
    function activationDebug() {

        console.log( "lastName", lastName );
        console.log( "firstName", firstName );
        console.log( "userMail", userMail );
        console.log( "userTel", userTel );
        console.log( "msgObject", msgObject );
        console.log("msgContent",msgContent);
    }

    /* ========== appel des fonctions ========== */
    // appel de la fonction d'execution de la fonction de débugage
    debugLanch();
    
})()
