# Sujet d'évaluation, Chronomètre

Vous devez utiliser React Native, Redux et styled-compenent. Vous utiliserez également les Hooks dans une approche fonctionnelle pour la création de vos composants.

Vous mettrez en place une navigation à l'aide de React Navigation vu en cours.

Vous allez développer un chronomètre. Il affichera les hh/mm/ss. La page principale listera l'historique des chronos réalisés sur la page dédiée au chrono. Un bouton Reset permettra d'effacer l'historique sur la page principale.

## Page principale

```text
-----------------------------
    [Home] Chrono
-----------------------------

    1. chrono : 0h 15m 38 s
    2. chrono : 0h 05m 18 s

    [Reset]
```

## Page chrono

Vous implémenterez les actions listées ci-après, remarque le bouton **save** ne sera actif que si l'on a lancé le chrono et appuyé sur le bouton stop pour arrêter le chrono.

- start permet de lancer le chrono.
- stop permet de mettre le chrono sur pause.
- reset permet de ré-initialiser le chrono, dans ce cas il n'est pas sauvegardé dans l'historique.
- save permet de sauvegarder le chrono après avoir cliqué sur le bouton stop.

```text
-----------------------------
    Home [Chrono]
-----------------------------

    [start] [stop] [reset] [save]

            01 m 27 s

```

Bon développement.