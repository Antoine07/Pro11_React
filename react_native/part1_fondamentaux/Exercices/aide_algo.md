# Algo pour le vote

- Créez un compteur dans le state de reducer. Il permettra d'avancer dans l'affichage des questions.

Tant que count < à la longueur des choix des questions faire

    - count = 1 => premier choix de question 

    - si choix fait => count + 1 

    - count = 2 => choix 2 

Si count >= à la longueur des choix des questions afficher le résultat

