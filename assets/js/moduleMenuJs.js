(function(){
/* =================================== HEADER ===================================*/
// Sélection cu conteur de nav
const navContainer = document.querySelector( ".navContainer" );

console.log( "navContainer", navContainer )

// Sélection du menu Burger
const btnBurger = document.querySelector( ".btnBurger" );
console.log( "btnBurger", btnBurger )

// Sélection de la croix de fermeture de la nav
const btnClose = document.querySelector( ".btnClose" );
console.log("btnClose",btnClose)

// Masque la nav au démarrage
// navContainer.classList.add( "isHidden" );

// Toggle de la nav :
// à partir du bouton burger
btnBurger.addEventListener( "click", toggleNav );

// à partir du bouton croix
btnClose.addEventListener( "click", toggleNav );

// fonction de toggle de la nav
function toggleNav(){
    if (navContainer.classList.contains( "hideMenu" )){
        navContainer.classList.remove( "hideMenu" );
        navContainer.classList.toggle( "isHidden" );
    } else {
        navContainer.classList.toggle( "isHidden" );
    }
}


})()
