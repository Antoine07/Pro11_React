# Game Calculate

## Router

Créez une autre branche pour travailler : **router** dans votre dépôt.

Vous allez maintenant mettre en place un router avec les liens suivants dans le projet :

```text
-------------------------------
    [Home] Game Score
-------------------------------
    Voici un jeu vous permettant de vous entrainez au calcul mental

```

La page **Home** présentera le jeu.

La page **Game** affichera le jeu à proprement parler.

La page de **Score** affichera les scores de l'utilisateur, à la fin d'une partie vous re-dirigerez l'utilisateur vers cette dernière page.


## Middleware

Créez un middleware permettant d'avoir une bonne granularité sur les success et echecs lors d'une partie. Faites un lien maintenant vers la page Feeback où vous afficherez les feeback et résultats echec/success par tour.

Le Feeback se fera par partie, par tour. Si l'utilisateur fait plusieurs parties, il y aura plusieurs feebacks. Voyez le Wireframe ci-dessous :

```text
-------------------------------
    [Home] Game Score Feeback
-------------------------------
    - created_at : 18171819,
    - success : 10,
    - echec : 10
    - average : 10,
    - round : 1 

    --- 

    - created_at : 1718191,
    - success : 19,
    - echec : 1
    - average : 19,
    - round : 2

```
