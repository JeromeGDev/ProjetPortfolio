( function () {    // Fonction qui s'auto-appelle pour éviter collision et sécurité
    // Définition de la valeur du statut d'execution de la fonction de débugage de l'animation : 
    let introDebugStatus = false;                                       // MODIFIER LA VALEUR SUR "TRUE" POUR DEBUGER

    
    // Déclaration des variables utilisées dans les fonctions
    
    
    const doorsOpener = document.getElementById( "doorsOpener" );       // variable d'utilisation du déclencheur de l'ouverture des portes
    // variable d'utilisation des portes coulissantes
    const leftDoor = document.getElementById( "leftDoor" );             // porte droites
    const rightDoor = document.getElementById( "rightDoor" );           // porte gauche
    const doorBlock = document.getElementById( "doorBlock" );           // bloc des portes
    const toAnimate = document.getElementById( "toAnimate" );           // variable de sélection des sous-éléments à animer
    const supprOverFlHid = document.querySelector( "body" );            // variable qui va permettre de modifier les valeur du body
    const navContainer = document.querySelector( ".navContainer" );     // variable qui récupère le conteneur de la navigation
    const bumperBurger = document.querySelector( ".btnBurger" );        // variable qui sélectionne le block du logo à faire disparaitre dans l'animation
    const animationValue = sessionStorage.getItem( "intro" );           // Récupération de la variable stockée dans le sessionStorage pour savoir si l'animation a déjà été jouée


    /* ========== Création des fonctions ========== */

    // Fonction d'appel du lancement de l'animation qui s'exécute si le sessionStorage ne contient pas la valeur "payed" pour la clé "intro"
    function playIntro(){
        if ( animationValue !== "played" ) {                             // si l'animation n'a pas été jouée
            doorsOpener.addEventListener( "click", openDoors );          // lance l'animation
        } else {                                                         // sinon    
            doorsOpener.style.display = "none";                          // affecte aux éléments la valeur finale pour considérer l'animation comme jouée
            leftDoor.style.display = "none";
            rightDoor.style.display = "none";
            doorBlock.classList.add( "hideDoorContainer" )
            toAnimate.style.display = "none";
            supprOverFlHid.style.overflow = "auto";
            navContainer.classList.add( "isHidden" );
        }
    }

    
    
    // fonction d'animation du texte sur la page d'intro en dessous du logo
    function evidenceOpener() {
        toAnimate.classList.toggle( "pAnimate" );                        // clignotement du texte
    }



    // fonction d'animation principale d'ouverture des portes
    function openDoors() {
        // animation du clignotement du texte
        setInterval( evidenceOpener, 750 );

        // ouverture des portes
        leftDoor.classList.add( "leftDoorOpen" );                        // ajoute la classe contenant l'animation de la porte gauche
        rightDoor.classList.add( "rightDoorOpen" );                      // ajoute la classe contenant l'animation de la porte droite

        navContainer.classList.add( "hideMenu" );                        // ajoute la classe contenant l'animation de dissimulation du menu
        setTimeout( () => {
            doorBlock.classList.add( "hideDoorContainer" );
        }, 1800 )

        setTimeout( () => {
            supprOverFlHid.style.overflow = "auto";                     // mofifie le overflow:hidden de l'animation pour permettre le scroll après le délais de déroulement de l'animation d'intro

            // une fois le menu caché : 
            navContainer.classList.add( "isHidden" );                   //ajoute la class qui modifie le menu non étiré par l'animation de masquage 
            navContainer.classList.remove( "hideMenu" );                //puis retire la class de l'animation qui étire le menu 
        }, 4700 )
        setTimeout( () => {
            
            bumperBurger.classList.add( "bumpBurger" );                 // fait disparaitre le logo centrale dans une animation
            
        }, 4500 )
        sessionStorage.setItem( "intro", "played" );                    // défini une valeur "played" dans le session storage pour que l'animation ne se rejoue que si le visiteur ferme la page, sinon, l'animation est considérée comme jouée et ne se relance pas

    }
    


    // fonction d'execution de la fonction de débugage : en fonction de la valeur du statut, affiche les valeurs de débugage dans la console. Ne s'excute que si la valeur est modifiée manuellement sur "true"
    function introDebugLanch() {
        if ( introDebugStatus !== false ) {
            introDebug();
        }

    }



    // fonction de débugage dans la console : en fonction de la valeur du statut,
    function introDebug() {

        console.log( "doorsOpener", doorsOpener );
        console.log( "leftDoor", leftDoor );
        console.log( "rightDoor", rightDoor );
        console.log( "doorBlock", doorBlock );
        console.log( "toAnimate", toAnimate );
        console.log( "supprOverFlHid", supprOverFlHid );
        console.log( "navContainer", navContainer );
        console.log( "bumperBurger", bumperBurger );
        console.log( "animationValue =", animationValue );

    }

    /* ========== appel des fonctions ========== */
    // appel de la fonction d'execution de la fonction de débugage
    introDebugLanch()
    
    // appel de la fonction d'execution l'animation d'introduction
    playIntro()

} )();
