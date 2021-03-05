# TP Yam

Vous allez créer une petite application qui permet de lancer 5 dés pour jouer au Yam. Il n'y aura qu'un seul joueur dans l'application et nous testerons que le lancer de 5 dés. Nous allons faire des statistiques sur les différentes combinaisons du jeu. Vous ne testerez que certaines combinaisons de Yam (voir plus bas).

Créez une application avec React et React router ainsi que **bootstrap CSS** ou Sytled Components ou Material UI pour les styles. 

Vous utiliserez également Redux pour la gestion du store. 

Utilisez Firebase pour enregistrer les différents résultats. Voir la page Stat, vous devez implémenter un bouton spécifique pour enregister les résultats. Aidez vous de la documentation de React Firebase pour mettre le code en place. Notamment utilisez la méthode push de React Firebase.

Utilisez la structure de dossiers et fichiers vu en cours pour développer le code.

Vous créerez une fonction **lance_de** pour générer le lancer des 5 dés. L'application aura deux pages uniquement.

```js
const lance_de = () => { 
    // TODO
}
```

## Page principale

Sur la page principale vous placerez un bouton Lancer afin de générer le lancer des 5 dés, un champ de type text permettra de fixer le nombre de lancer(s) que l'on souhaite réaliser. Notez qu'un lancer correspond à 1 lancer de 5 dés. Vous testerez les combinaisons suivantes sur chaque lancer :

- Brelan : 2 (trois dés identiques)

- Carré : 1 (deux dés indentiques)

- Double paire : 4 (deux dés X 2 identiques)

- Yam : 2 (5 dés identiques)

```txt

--------------------------------------------

    Yam Stat

--------------------------------------------

Nombre de lancer(s) [19]

[ Lancer ]

```

## Page Stat

Elle affichera les résultats des statistiques du jeu. Un bouton **Enregistrer fb** permettra d'enregistrer les résultats dans fb. Voir la méthode push de React Firebase.

```txt

--------------------------------------------

    Yam [Stat]

--------------------------------------------

[ Enregistrer fb ]

Résultats : 

- Brelan : 1 (trois dés identiques)

- Carré : 1 (quatre dés indentiques)

- Double paire : 1 (deux dés X 2 identiques)

- Yam : 1 (5 dés identiques)

```