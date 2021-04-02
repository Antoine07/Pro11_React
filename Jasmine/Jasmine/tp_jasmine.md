# Jasmine

Utilisez la structure dans le dossier Example Jasmine pour développer les tests demandés.

## Exercice

Récupérez l'exemple et testez la calculatrice à l'aide des tests déjà écrit dans les specs du projet.

## Exercice fibonacci TDD

Implémentez le code de la suite de Fibonacci et testez le code de cette fonction. Récupérez la structure du projet précédent pour réaliser les tests.

## Exercice factoriel

1. On peut utiliser une fonction comme un tableau. Créez une fonction qui calcul une factoriel d'un entier et gérant un système de cache, puis testez cette fonction.

```js
function fact(n){
    if( !fact[n] ){
        fact[n] = n > 0 ? n * fact(n-1) : 1 ;
    }

    return fact[n];
}

```

2. Testez que la fonction fact a bien des indices comme un tableau. Utilisez l'objet Object.keys sur la fonction elle-même.

## Asynchrone

Tests asynchrone avec Jasmine. Considérez les deux exemples suivants avant de faire les exercices qui suivent.

### Exemple 1 avec async/await

```js
beforeEach(async function() {
  await someLongSetupFunction();
});

it('does a thing', async function() {
  const result = await someAsyncFunction();
  expect(result).toEqual(someExpectedValue);
});
```

### Exemple 2 avec Promise

```js
beforeEach(function() {
  return new Promise(function(resolve, reject) {
    // do something asynchronous
    resolve();
  });
});

it('does a thing', function() {
  return someAsyncFunction().then(function (result) {
    expect(result).toEqual(someExpectedValue);
  });
});
```

## Exercice add

Avant d'implémenter le code métier de la fonction ci-dessous, écrivez le test à l'aide de Jasmine.

Créez une fonction add asynchrone qui additionne des entiers (array) avec un délais :

```js
add( numbers, delais );
```

## Exercice fibonacci async 

Ecrivez le test TDD avant d'implémenter le code métier. 

1. Vous écrirez une fonction avec le mot clé yield (générateur). Vous testerez que la somme des deux termes précédent est bien égale au terme en question. Vous vous limiterez à une fonction calculant les 10 premiers termes de cette suite.

```js
[1, 1, 2] 

1 + 1 = 2
```

2. Utilisez spyOn de Jasmine et tesez la fonction fibonacci de la manière suivante :

```js
spyOn(someObj, 'func').withArgs(3).and.returnValue([1, 1, 2]);
someObj.func(3); 
```

3. Ecrivez un script qui retourne toutes les 500ms les nombres successifs de la suite de Fibonacci.Testez dans un deuxième test que cette suite est bien égal à ce qui suit. Limitez vous à 10 termes de la suite.

```js

1 1 2 3 5 8 13 21 34 ...

```