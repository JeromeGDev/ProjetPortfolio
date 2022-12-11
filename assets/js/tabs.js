( function () { // Fonction GLOBALE qui s'auto-appelle : permet d'éviter collision avec d'autres fonction du code qui pourrait avoir le même nom et sécuriser le code en empêchant des appels hors fonction
    
    // Définition de la valeur du statut d'execution de la fonction de débugage de l'animation : 
    let activationDebugStatus = false;                                               // MODIFIER LA VALEUR SUR "TRUE" POUR DEBUGER

    let afficherOnglet = function (a, animations) { 
        if (animations === undefined) {                                        // Le système d'animation se charge dés le début de la page, donc, en ajoutant un paramètre animation à la fonction et en disant : si l'animation est undefined alors:
            animations = true                                                  // Si l'animation est indéfinie, elle doit être considérée comme déjà ok
        }
        // Déclaration des li à utiliser
        let div = a.parentNode.parentNode.parentNode                            // on crée la li div qui sélectionne l'élément le plus haut de la div en cours (relative aux onglets)
        let li = a.parentNode                                                   // Nous allons utiliser du code plusieurs fois, donc, on crée la variable qui sélectionne le li parent de "a"

        let activeTab = div.querySelector(".tab-content.active")                // Sélection l'onglet avec les classes qui l'identifie comme étant "onglet de contenu" et "actif"
        let tabToShow = div.querySelector(a.getAttribute("href"))               // Sélectionne l'élément à afficher

        // Fonctions du code
        if (li.classList.contains("active")){                                   // SI l'élément parent (parentNode) de l'élément en cours (this), qui est "li", a (contains) la classe active ("active")
            return false;                                                       // alors, retourne "false" pour prendre en compte que l'élément est actif
        }                                                                       // retourne FAUX (pour interrompre l'action : le reste de la fonction ne sera pas exécuté ( 4 et 5))
        
        div.querySelector(".tabs .active").classList.remove("active")           // ON RETIRE la class active de l'onglet actif: depuis la div choisie, on sélectionne le premier élément "tabs" qui a la classe "active" et on la lui supprime

        // On ajoute la classe active sur le contenu actif
        li.classList.add("active")                                              // DEPUIS l'ELEMENT ACTIF (this), de "li", on sélectionne l'élément parent de type "li", et on lui ajoute la classe "active"
        if (animations){                                                        // Si on a une animation, alors on execute le contenu dans l'accolade
            activeTab.classList.add("fade")                                     // on ajoute la classe "fade"
            activeTab.classList.remove("in")                                    // retire la classe "in" au cas où elle y serait déjà.
            let transitionend = function(){                                     // définition de la fonction de transition des ongletx    
                this.classList.remove("fade")                                   // supprime la classe "fade" de l'élément actif
                this.classList.remove("active")                                 // supprime la classe "active" de l'élément actif
                tabToShow.classList.add("active")                               // on appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "fade"
                tabToShow.classList.add("fade")                                 // n appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "active"
                tabToShow.offsetWidth                                           // Demande au navigateur de nous fournir la largeur pour l"impression, ce dont nous n'avons pas besoin, mais pour réaliser cette opération, il doit rechercher le code, ce qui permet d'éviter de ne pas avoir l'effet d'apparition avec le "in" parce qu'il ajoute les trois classes à la fois, au lieu de l'une après l'autre
                tabToShow.classList.add("in")                                   // on appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "in"
                activeTab.removeEventListener('transitionend', transitionend)   // supprime l'écouteur quand il a tout exécuté
            }
            activeTab.addEventListener('transitionend', transitionend)          // ajoute l'écouteur d'évènement sur le li actif
        } else {                                                                // sinon
            tabToShow.classList.add("active")                                   // on ajoute la classe active
            tabToShow.classList.remove("active")                                // on supprimer la classe active
        }
        // / fin de CSS =======================================================
    }
    let tabs = document.querySelectorAll(".tabs a")                             // Sélection du lien "a" de la class "tabs"
    for (let i = 0 ; i < tabs.length ; i++){                                    // On parcoure la liste des éléments tabs
        tabs[i].addEventListener("click", ()=>{                                 // On place un écouteur sur l'élément tabs ayant l'indice actif [i], on surveille les click qui déclenche la fonction hashchange
            afficherOnglet(this)                                                // on appelle la fonction afficherOnglet, et "this" refais son apparition, car la fonction est appliquée à l'élément en cours
        })
    }


    /** Dans les lignes suivantes :
     * Ajouter LA CLASS active dur le lien href="hash"
     * RETIRER LE CLASS active sur les autres onglets
     * OBJECTIF : changer d'onglet
     */

    let hashchange = function(e){                                                 // On crée une fonction hashchange qui automatise le code contenu à l'intérieur et on lui met "e" en paramètre
        let hash = window.location.hash                                                // on récupère le hash de l'element window - le hash est une fonction de l'élément window qui fournis juste l'ancre - on peut l'obtenir, via la console en tapant window
        let a = document.querySelector('a[href="'+ hash +'"]')                         // Sélectionne les éléments "a" spécifiques ayant pour valeur le "hash" récupéré à la ligne 
        if (a != null && !a.classList.contains("active")){                             // Si ( "a" est différent de null ET la liste des classe de "a" ne contient pas "active", alors )
            afficherOnglet(a, e != undefined)                                          // on appelle la fonction afficherOnglet, et elle est appliquée au lien "a", puisque la fonction appelle le lien de l'onglet à afficher - e!= undefined permet de définir ce qui se passe quand e n'est pas undefined
        }
    }

    // ajout d'un écouteur sur le changement du hash pour déclencher le changement d'onglet
     window.addEventListener("hashchange", hashchange)                                 // On crée un écouteur sur le window pour détecter les changement de hash de manière à executer la fonction hashchange

     
    // fonction d'execution de la fonction de débugage : en fonction de la valeur du statut, affiche les valeurs de débugage dans la console. Ne s'excute que si la valeur est modifiée manuellement sur "true"
    function debugLanch() {
        if ( activationDebugStatus !== false ) {
            activationDebug();
        }
    }


    // fonction de débugage dans la console : en fonction de la valeur du statut,
    function activationDebug() {

        console.log( "activeTab", activeTab );
        console.log( "tabToShow", tabToShow );
        console.log( "tabs", tabs );
    }

    /* ========== appel des fonctions ========== */
    // appel de la fonction d'execution de la fonction de débugage
    debugLanch()

    // appel de la fonction de hashage qui permet de lancer l'utilisation des onglets
    hashchange();

    })()
