( function () { // Fonction qui s'auto-appelle pour éviter collision et sécurité
    /* Ouverture des portes pour entrer sur le site*/
    const doorsOpener = document.getElementById( "doorsOpener" );
    const leftDoor = document.getElementById( "leftDoor" );
    const rightDoor = document.getElementById( "rightDoor" );
    // let logoContainer = document.getElementById( "logoContainer" );
    const doorBlock = document.getElementById( "doorBlock" );
    const toAnimate = document.getElementById( "toAnimate" );
    const supprOverFlHid = document.querySelector( "body" );
    const navContainer = document.querySelector( ".navContainer" );
    const bumperBurger = document.querySelector( ".btnBurger" );

    console.log( "supprOverFlHid", supprOverFlHid );
    console.log( "bumperBurger", bumperBurger );

    doorsOpener.addEventListener( "click", openDoors );
    function openDoors() {
        leftDoor.classList.add( "leftDoorOpen" );
        rightDoor.classList.add( "rightDoorOpen" );
        navContainer.classList.add( "hideMenu" );
        setTimeout( () => {
            doorBlock.classList.add( "hideDoorContainer" );
        }, 1800 )

        setTimeout( () => {
            supprOverFlHid.style.overflow = "auto";
            navContainer.classList.add( "isHidden" );
        }, 4700 )
        setTimeout( () => {
            bumperBurger.classList.add( "bumpBurger" );
        }, 4500 )
    }



    /* Animation du texte sur la page d'intro en dessous du logo */
    setInterval( evidenceOpener, 750 );
    function evidenceOpener() {
        toAnimate.classList.toggle( "pAnimate" );
    }
} )();
