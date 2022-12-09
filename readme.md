# Réalisation du P3 - Formation Développeur Web - OPENCLASSROOMS - 2021

Développement du site correspondant aux maquettes fournis pour le projet ohmyfood.

Les documents fournis comprenaient :
- Des maquettes mobile first en 375px
- Un courrier pdf de Debrif de la mission
- Un fichier .txt contenant les textes à insérer, différents de ceux présents sur les maquettes.
- Des vidéos de présentation des animations attendues.

Le projet 3, présenté ici comprend :
- la page index.html qui est la page d'acceuil.
- les 4 pages html de chaque restaurant du projet sur lesquels les menus sont présentés.
- Un dossier "Public" qui intègre 4 sous-dossiers :
    -> Un sous-dossier CSS : contenant le fichier style.css et style.css.map issus de la compilation des fichiers sass.
    -> Un sous-dossier FontAwesome : qui contient tous les éléments nécessaire au fonctionnement des icônes FA en local
                                     (dont un dossier css et un dossier webfont)
                                     
                                     L'installation et l'utilisation a été faite selon les indications proposées sur le site officiel de Font-Awesome :
                                    - Instruction d'utilisation en local : https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself
                                    - Instruction d'utilisation avec SASS : https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/sass
    -> Un sous-dossier "fonts" qui comprend les fichiers des polices pour leur intégration @fontface (polices Roboto et Shrickand)
    -> Un sous-dossier "img" dédié aux images et qui comprend un dossier avec le logo, mais qui n'est pas utilisé puisque sur le site, le logo étant constitué de la police, je l'ai donc intégré en créant le texte "Ohmyfood" dans le html et formatté en css.

    -> Le dossier img contient un dossier "restos" qui contient les images d'illustration des restraurants, et j'ai redimensionné et adapté leur résolution et compression pour les alleger afin qu'elles correspondent respectivement aux mediaqueries où elles sont utilisées. Je les ai aussi renommées pour le référencment. et enfin un dossier visu qui comporte quelques images - qui ne sont plus utilisées - et qui sont constituées des icones font-awesome que je compptais insérer en premier pour les avoir en local (avant de découvrir la méthode d'intégration fournie par FontAwesome), et enfin ques images comme le curseur de la main que je voulais utiliser parce que ce trouvais celui de font-awesome moins esthétique  et ne correspondant pas aux dimensions mesurées sur la maquette.

// Compétences développées - acquises grâce au P3 : Je ne parlerai que des principales, celles qui m'ont vraiment apporté une nouvelles manière de penser le code :

    - Les animations : tout de suite après les cours on se sent hésitant, peu sur de soi. Aujourd'hui, je n'airai pas jusqu'à dire que c'est insticintif, mais je n'ai plus d'appréhension à penser, à imaginer une animations ou des transitions. Je sais comment m'y prendre, où trouver des informations si j'en ai besoin, ou quoi faire pour mettre en place un déclencheur d'animation ou de transition.

    - L'utilisation des pseudo(-element -classes) : c'est un concept difficile à appréhender lorsque l'on débute la programmation. Mais les cours sur les animations m'ont poussés à aller chercher plus d'information, mais je vrai déclencheur,la véritable source qui m'a permis de revenir dans mon code html et de le revoir pour utiliser le CSS à la place; c'est l'intégration de FontAwesome en local.
    Avec le recul, c'est un exercice que je pense qu'il serait intéressant de faire executer aux apprenants (je vais d'ailleurs aller mettre un petit mot à ce sujet sur Workplace hsitoire de partager cette information. si cela m'a aidé, il est probable que ca puisse aussi en aider d'autres.)

    - Si je n'ai pas encore compris totalement l'utilisation de @each qu'on nous a mis dans le cours, chercher des informations dessus m'a permis d'arriver sur une vidéo tuto de grafikart.fr qui, elle, m'a été très utile dans le projet. C'est l'utilisation de @for qui m'a permis de mettre en place facilement une aparaition décalée pour les éléments de menu. C'est tout bête, mais je vois tout a fait le potentiel d'utilité de cette fonctionnalité. (il faut vraiment que je trouve la même chose pour le @each parce que je sens aussi que ça peut être très intéressant).

// A améliorer :
    - Le code que je présente ici répond aux demandes faites pour le projet, c'est la principal. Il existe différentes manière de coder, chaque développeur aura ses préférences et ses techniques. Je suis en train d'apprendre les miennes.
    Mais, parce que j'ai déjà perdu un mois de travail, et donc de formation, et par voie de consquence, j'en ai peur, toute chance d'obtenir mon diplôme juste à cause de mauvaises instructions d'installation pour l'installation de Git, Node.js et SASS, je ne peux plus perdre de temps, et je ne peux donc pas améliorer encore mon code.

        Mais j'aurais pu, à certains endroit...

        ## Bonton Fonctionnement :
        Là où j'ai pu le faire facilement, je l'ai fais!
        
        Mais par exemple, pour la conception du bouton de la section fonctionnement sur la page index.html, je suis passé par trois mixin (une pour l'intérieur du bouton, l'autre pour l'extérieur (sur laquelle j'avais mis un effet d'apparition - que j'ai finalement enlevé parce que, n'étant pas demandé, j'avais peur d'être pénalisé pour ça) et j'y ai jointe une mxin plus générale que j'ai créée pour faire des jeux d'ombre sur les boites).
        La mixin externe défini lapparance extérieur du bouton et fixe l'architecure interne (flex) des boutons.

        Et pour l'intérieur du bouton, j'ai utilisé des icones "en dur" dans le html, j'ai créé une div avec le nombre 1, 2 ou 3, puis une div pour le texte, et j'ai positionné et aligné tout ceci, mais je suis convaincu que je pourrais simplifier la chose en utilisant un ::before sur le block bouton pour insérer un content:'1' ou 2, ou 3 et ensuite leur créer un disque d'arrière plan autour, et de même, un ::before placé sur le texte du bouton contenant l'icone demandé simplifierait le code.

        Mais, me lancer dans ces modifications, m'amènerait à perdre encore plus de temps. Et s'il me reste une toute petite chance de pouvoir encore espérer terminer les projets dans les temps pour rattraper le retard accumulé a cause des problèmes d'installation des outils Git, Node et Sass, je ne peux pas me permettre de prendre le temps de mettre ça au point.

        Par contre, je l'ai dans un coin de la tête, et il est certain que je saurai identifier et exploiter les prochaines fois où j'aurai besoin de ces ::before et ::after dont je sens vraiment l'utilité maintenant, grâce à tout le travail que j'ai fais de recherche pour ce projet.

        ## Un autre exemple d'utilisation de ::before.
        J'avais besoin de créer un voile pour assombrir la couleur d'un bloc, mais en jouant sur les couleurs, ca m'obligait à répercuter d'autres changements à plusieurs endroits dans le code. Alors, que là, j'ai juste créé un voile en rgba (0,0,0, 0.2) que j'ai placé dans un ::before avant mon élément en lui donnant les bonnes dimensions, et le tour était joué. L'ensemble du bloc a été légèrement assombri.

Il y a encore surement d'autres points qui pourraient être peaufiner, mais je suis encore trop impliqué dans mon code, c'est encore trop frais pour que je prenne le recul siffisant pour les envisager.

L'important pour moi est d'avancer dans la formation maintenant.
