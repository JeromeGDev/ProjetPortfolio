(function(){ // Fonction qui s'auto-appelle pour éviter collision et sécurité
    let afficherOnglet = function (a, animations) { 
        if (animations === undefined) {                                        // Le système d'animation se charge dés le début de la page, donc, en ajoutant un paramètre animation à la fonction et en disant : si l'animation est undefined alors:
            animations = true                                                  // L'animation doit être considérée comme déjà ok
            }
        // Déclaration des letiables à utiliser
        let div = a.parentNode.parentNode.parentNode                            // la fonction event = on crée la letiable div qui sélectionne l'élément le plus haut de la div en cours (relative aux onglets)
        let li = a.parentNode                                                   // Nous allons utiliser du code plusieurs fois, donc, on crée la letiable "li" qui sélectionne le li parent

        let activeTab = div.querySelector(".tab-content.active")                // On crée un letiable activeTab qui sélection l'onglet avec les classes qui l'identifie comme étant "onglet de contenu" et "actif"
        let aAfficher = div.querySelector(a.getAttribute("href"))               // On crée un letiable aAfficher selectionne l'élément à aaficher

        // Fonctions du code
        if (li.classList.contains("active")){                                   // SI l'élément parent (parentNode) de l'élément en cours (this), qui est "li", a (contains) la classe active ("active")
        return false}                                                           // retourne FAUX (pour interrompre l'action : le reste de la fonction ne sera pas exécuté ( 4 et 5))
        // ON RETIRE la class active de l'onglet actif
        div.querySelector(".tabs .active").classList.remove("active")           // depuis la div choisie, on sélectionne le premier élément "tabs" qui a la classe "active" et on la lui supprime

        // On ajoute la classe active sur le contenu actif
        li.classList.add("active")                                              // DEPUIS l'ELEMENT ACTIF (=this de la letiable "li"on sélectionne l'élément parent de type "li", et on lui ajoute la classe "active"
        if (animations){                                                        // Si on a une animation, alors on execute le contenu dans l'accolafe
            activeTab.classList.add("fade")
            activeTab.classList.remove("in")                                        // retire la classe "in" au cas où elle y serait déjà.
            let transitionend = function(){                                         // On met la ligne suivante en commentaire (point 20) et on ajoute cette fonction stockée dans une vraible transitionend pour pouvoir supprimer EventListener qui crée un empilement d'évènement finissant par créer un bug.
            //activeTab.addEventListener('transitionend', function(){               // ajoute un écouteur pour surveiller la fin de la transition sur activetTab
                this.classList.remove("fade")                                       // supprime la classe "fade" de l'élément actif
                this.classList.remove("active")                                     // supprime la classe "active" de l'élément actif
                aAfficher.classList.add("active")                                   // on appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "fade"
                aAfficher.classList.add("fade")                                     // n appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "active"
                aAfficher.offsetWidth                                               // Demande au navigateur de nour fournir la lergeur pour l"impression, ce dont nous n'avons pas besoin, mais pour réaliser cette opération, il doit rechercher le code, ce qui permet d'éviter de ne pas avoir l'effet d'apparaition avec le "in" parce qu'il ajoute les trois classes à la fois, au lieu de l'une après l'autre
                aAfficher.classList.add("in")                                       // on appelle la fonction qui sélectionne l'élément à afficher et on lui ajoute la classe "in"
                activeTab.removeEventListener('transitionend', transitionend)       // supprime l'écouteur quand il a tout executé
            }
            activeTab.addEventListener('transitionend', transitionend)
        } else {                                                                    // sinon
            aAfficher.classList.add("active")                                       // on ajoute la classe active
            aAfficher.classList.remove("active")                                    // on supprimer la classe active
        }
        // / fin de CSS =======================================================
    }
        let tabs = document.querySelectorAll(".tabs a")                             // On crée la letiable "tabs" qui est la sélection du lien "a" de la class "tabs" point (1)
    for (let i = 0 ; i < tabs.length ; i++){                                        // On parcoure la liste des éléments tabs
        tabs[i].addEventListener("click", function(event){                  // On place un écouteur sur l'élément tabs ayant l'indice actif [i], on surveille les click qui déclenche la fonction(event)
            afficherOnglet(this)                                                    // on appelle la fonction afficherOnglet, et "this" refais son apparition, car la fonction est appliquée à l'élément en cours
        })
    }


    /** 
     * Ajouter LA CLASS active dur le lien href="hash"
     * RETIRER LE CLASS active sur les autres onglets
     */

    let hashchange = function(e){                                                      // 38 - On crée une fonction hashchange qui automatise le code contenu à l'intérieur et on lui met "e" en paramètre
        let hash = window.location.hash                                                // 12 - on récupère le hash de l'element window - le hash est une fonction de l'élément window qui fournis juste l'ancre - on peut l'obtenir, via la console en tapant window
        let a = document.querySelector('a[href="'+ hash +'"]')                         // 13 - on crée une letiable "a" qui sélectionne les éléments "a" spécifiques ayant pour valeur le "hash" récupéré dans la letiable à l'étape 13
        if (a != null && !a.classList.contains("active")){                             // 14 - Si ( "a" est différent de null ET la liste des classe de "a" ne contient pas "active", alors )
            afficherOnglet(a, e != undefined)                                           // 17 - on appelle la fonction afficherOnglet, et elle est appliquée au lien "a", puisque la fonction appelle le lien de l'onglet à afficher - e!= undefined permet de définir ce qui se passe quand e n'est pas undefined
        }
    }
     window.addEventListener("hashchange", hashchange)                                 // 37 - On crée un écouteur sur le window pour détecter les changement de hash de manière à executer la fonction hashchange
     hashchange()                                                                       // 38 - On appelle la fonction hashchange dés le démarrage de la page

    })()
