# Projet Portfolio : Formation Talis
* Projet exemple uniquement : ne sera jamais utilisé en ligne

- Compilé avec SASS

# Contenu : site OnePage

# Précisions:
Je n'ai pas encore eu le temps de mettre en oeuvre de nombreuses choses telles que :
- L'ajout de textes complémentaires, autant dans les éléments de la timeline que dans la section des onglets.
- L'optimisation SEO (liens internes) + liens externes.
- Ajout de textes au survol des logos en section d'accueil.
- Mise en place des balises aria pour l'accessibilité, ainsi que les titres sur les liens ni vérification de toutes balises alt des images.
- Pas d'inspiration pour le footer (théoriquement des liens sortants + mentions légales - attribution et copyright).
- Mise en place d'un regex pour la vérification (sécurité des champs de saisie du formulaire).
- Concevoir une page d'accueil plus animée afin de la rendre plus attractive d'un point de vue technique.

- Étant donné que je ne compte pas utiliser ce projet de manière active, les liens vers les réseaux sociaux ne mènent nul part.

# Notice :
Breakpoints:
Dans la maquette, j'avais initialement prévu des breakpoint prédéterminé.
En codant, je me suis adapté de manière à ce que les éléments évoluent en fonction du contexte de la largeur.
Toutes fois certains breakpoints ont été choisis en fonction des images, et leurs dimension et flex de présentation.

Animation d'introduction :
Jouée une fois. Un fois l'introduction jouée, une clé est ajoutée dans le sessionStorage afin que l'animation d'introduction ainsi que les blocages (overflow hidden) ne se rejouent pas tant que la page n'a pas été fermé. L'animation se joue à chaque nouvelle ouverture.
Une animation supplémentaire de clignotement du texte est ajoutée de manière à attirer l'attention du visiteur sur l'endroit à cliquer pour entrer sur le site.

- 0 - Header : volontairement minimaliste.
Placé en position sticky. L'idée était, au scroll, de faire apparaître la photo dans le header à droite du logo pour les version à partir des tablettes.

UX : Menu - navigation
Navigation sur des ancres puisque c'est un OnePage.

J'ai pensé selon ma manière d'utiliser le site (et un test auprès de l'un de mes proches).
Étant droitier, je tiens mon téléphone dans la main gauche, à partir de ce constat, (puisque la majorité des utilisateurs est droitière), j'ai choisi de mettre le menu burger à gauche afin qu'il soit facilement accessible avec le pouce pour une navigation à une main.
Pour la même raison, le menu de navigation arrive par la gauche et les boutons sont accessibles avec le pouce de la main gauche.
 
- 1 - Section Accueil (landingpage)
En théorie, au "clic" pour les versions mobile et tablette, et au "survol" de la souris pour les laptops et desktops, il était prévue qu'un texte explicatif apparaisse sous les logo, pour chaque langage.

- 2 - Parcours - Timeline.
Je n'ai pas eu le temps de rajouter les éléments supplémentaires textuels sensés apparaître au fur et à mesure que l'écran s'élargit et qu'il peut accueillir plus de contenu. Je ne l'ai fait que pour une mediaquery (et pour qu'on puisse le repérer lors des tests, j'ai mis ce texte qui apparaît en italic)

- 3 - Portfolio
En display flex avec des tailles d'image fixes.
Au clic pour les smartphones et tablettes, au survol pour les laptops et desktop, une petite animation avec un flip en css permet de faire afficher quelques menus détails sur les projets.
Dans l'idéal, une fenêtre modale avec des détails pour chaque projet était prévu, pas réalisée par manque de temps.

- 4 - Les étapes de création
Au travers de cadres résumant chaque étape par le biais d'un système d'onglets réalisés en JS (sur la base d'un ancien code noté sur un tutoriel suivi sur le site de GrafiKart), je résume quelques unes des étapes qu'un client êut-avoir besoin de connaître sur les étapes importantes du montage d'un projet web.

- 5 - Formulaire de contact
En flex, un petit texte d'accroche sur la gauche, des champs de formulaires marqués obligatoires, avec un marquage couleur afin d'identifiés les champs correctement remplis.
Pas eu le temps de créer un Regex en JS pour la vérification et sécurisation des champs de formulaire.
Le texte est écrit trop petit et demanderait à être adapté pour être plus lisible.

- 6 - Petit paragraphe de "rappel" de compétences de graphiste avec un lien sensé renvoyer sur mon site consacré au design.
