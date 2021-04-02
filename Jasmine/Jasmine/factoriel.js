
/*

les fonctions anonymes qui s'appellent elles-mêmes, permettent ici de créer deux namespaces
dans lesquelles vous pouvez donc créer deux fonctions qui portent le même nom.

Les deux codes ci-dessous permettent de définir un système de cache

*/

(function() {
    "use strict";

    // Une fonction en JS est un objet et possède également le prototype array 
    // qui permet ici de définir une "sorte" de tableau pour assigner des valeurs
    // dans cette structure
    function fact(n){
        if( !fact[n] ){
            console.log('calcul', n);
            fact[n] = n > 0 ? n * fact(n-1) : 1 ;
        }
    
        return fact[n];
    }
    
    console.log(fact(5));
    console.log(fact(6));
})();

(function() {
    "use strict";
    // Ici on peut facilement en JS ajouter une propriété de type tableau 
    // on l'a appelée cache et on lui assigne un tableau vide.
    function fact(n){
        // si on n'est pas encore passer par cette clé du tableau alors on calcule la factoriel
        // sinon on retournera ce qui sera dans le cache
        if( !fact.cache[n] ){
            console.log('calcul', n);
            fact.cache[n] = n > 0 ? n * fact(n-1) : 1 ;
        }
    
        return fact.cache[n];
    }

    fact.cache = [];
    console.log(fact(5));
    console.log(fact(6));
})();

