# QCM React

## Question 1
Que signifie JSX ?

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] C'est un langage qui permet de générer des objets avec une notation HTML.
* [ ] C'est un langage qui permet de typer des variables et objets JS.
* [ ] C'est un langage qui permet de générer des classes avec une notation HTML.
* [ ] C'est un langage qui permet de générer des objets avec une notation XML.

## Question 2

Définissez simplement ce que représente le DOM virtuel en choisissant une seule et unique définition ci-dessous :

*Réponses* :
* [ ] C'est une représentation du DOM réel sous d'une arborescence XML.
* [ ] C'est une représentation du DOM réel sous forme d'objets simples JS.
* [ ] C'est une représentation du DOM réel sous forme de fonctions écrites en C.
* [ ] C'est une représentation du DOM réel sous de tableau JS et XML.

## Question 3

Dans un projet CRA. Est ce que le code dans le fichier App.js suivant est valide ?

```js
const Message = (props) => {
    props.message = "Nouveau message" ;
    return(
        <p>{props.message}</p>
    )
}
const App =() => <Message message="message" />;

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Oui car la propriété est passée par décomposition.
* [ ] Oui car les propriétés sont mutables.
* [ ] Non car les propriétés sont en lecture seule.

## Question 4

Dans un projet CRA. Est-ce que le code suivant est valide ?

```js

import React from 'react';

const Post = () => {
   
    return(
        <p>post</p>
    )
}
const App =() => (
    <Post />
    <Post />
    <Post />
);

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il est valide et affichera trois paragraphes dans le DOM.
* [ ] Il est valide et affichera un paragraphe dans le DOM.
* [ ] Il n'est pas valide le code produira une erreure.

## Question 5

Dans un projet CRA. Qu'affiche le code suivant ?

```js

import React, {useEffect, useState} from 'react';
const Clock = () => {
    const [ date, setDate ] = useState(new Date);

    useEffect(() => {
        setTimeout(() =>setDate(new Date) , 1000)
    });

    return(
        <p>{date.toLocaleTimeString()}</p>
    )
}
const App =() => <Clock />;

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche une horloge hh/mm/ss du temps qui passe.
* [ ] Il affiche la date au format hh/mm/ss une seule fois.
* [ ] Il affiche la date au format hh/mm/ss deux seule fois.

## Question 6

Dans un projet CRA. Qu'affiche le code suivant ?

```js

import React, {useEffect, useState} from 'react';
const Clock = () => {
    const [ date, setDate ] = useState(new Date);

    useEffect(() => {
        setTimeout(() =>setDate(new Date) , 1000)
    }, []);

    return(
        <p>{date.toLocaleTimeString()}</p>
    )
}
const App =() => <Clock />;

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche une horloge hh/mm/ss du temps qui passe.
* [ ] Il affiche une date au format hh/mm/ss une seule fois.
* [ ] Il affiche une date au format hh/mm/ss deux seule fois.

## Question 7

Dans un projet CRA. Dans quel ordre s'affiche les console.log ci-dessous ? Considérez la valeur de count lors de l'exécution du script.

Répondez en choisissant une seule et bonne réponse.

```js

import React, {useEffect, useState} from 'react';
const App = () => {
    const [ count, setCount ] = useState(0);

        useEffect(() => {
            console.log(' useEffect ', count);

        }, [count]);

        console.log(' component ', count);

        if(count === 0) {
            setTimeout(() => setCount( count + 1 ), 1000)
        };

        return(
            <p>Je suis un test</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Dans l'ordre suivant :
```text
useEffect  0
component  0
component  1
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
component  0
useEffect  0
component  1
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
component  1
component  0
useEffect  0
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
useEffect  1
component  0
useEffect  0
component  1
```

## Question 8

Dans un projet CRA. Dans quel ordre s'affiche les console.log ci-dessous ? Considérez la valeur de count lors de l'exécution du script.

Répondez en choisissant une seule et bonne réponse.

```js

import React, {useEffect, useState} from 'react';
const App = () => {
    const [ count, setCount ] = useState(0);

        useEffect(() => {
            console.log(' useEffect ', count);
            if(count === 0) {
                setTimeout(() => setCount( count + 1 ), 1000)
            };

        }, []);
        
        console.log(' component ', count);

        return(
            <p>Je suis un test</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Dans l'ordre suivant :
```text
component  0
useEffect  0
component  1
```
* [ ] Dans l'ordre suivant :
```text
useEffect  0
component  0
component  1
```
* [ ] Dans l'ordre suivant :
```text
component  1
useEffect  1
component  0
```
* [ ] Dans l'ordre suivant :
```text
useEffect  1
component  0
component  1
```

## Question 9

Dans un projet CRA. Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse.

```js
import React, {useEffect, useState} from 'react';
const App = () => {
    const [ count, setCount ] = useState(0);

        useEffect(() => {
            setTimeout(() => setCount( count + 1 ), 1000)
        }, [count]);
        
        return(
            <p>{count}</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche 0 puis 1 au bout d'une seconde dans le DOM.
* [ ] Il affiche 1 au bout d'une seconde dans le DOM
* [ ] Il affiche 0 puis 1, 2, ... avec un interval 1s dans le DOM.
* [ ] Il affiche 0 dans le DOM

## Question 10

Dans un projet CRA. Est ce que le code dans le fichier App.js suivant est valide ?

```js
const Message = ({message}) => {
    message = "Nouveau message";

    return(
        <p>{message}</p>
    )
}
const App =() => <Message message="message" />;

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Oui car la propriété est passée par décomposition.
* [ ] Oui car les propriétés sont mutables.
* [ ] Non car les propriétés sont en lecture seule.

## Question 11

Dans un projet CRA. Est-ce que le code suivant est valide ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js
import React, {useState} from 'react';

const App =() => {
    const [value, setValue] = useSate('');

    return(
        <label>
        Choisissez votre parfum favori :
        <select value={value} onChange={() => setState(value)}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
        </select>
        </label>
        <p>Response : {value}</p>
    )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Oui 
* [ ] Non

## Question 12

Dans un projet CRA. Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js
import React, {useState, useEffect} from 'react';

const App =() => {
    const [count, setCount] = useState(0);

    change = () =>{
        setCount(11);
    }

    return (
        <div>
            <Message onChange={() => change() } />
            <p>{count}</p>
        </div>
    )
}

const Message = (props) => {

    useEffect(() => {
        setTimeout(() => props.onChange(), 1000)
    }, []);

    return(
        <p>Message !</p>
    )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Ce code n'est pas valide, il affichera une erreur React. 
* [ ] Ce code affichera dans le DOM 0 uniquement.
* [ ] Ce code affichera dans le DOM 11 uniquement.
* [ ] Ce code affichera dans le DOM 0 puis au bout 1s 11.

## Question 13

Dans un projet CRA. Quel est le code du Wrapper suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js
import React, {useState, useEffect} from 'react';

const App = (props) => {
    return(
        <>
            <Wrapper>
                <ul>
                    <li>Home</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <p>Hello</p>
            </Wrapper>
        </>
    )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = () => <></>;
```
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = ({children}) => <div className="main">children</div>;
```
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = ({children}) => <div className="main">{children}</div>;
```

## Question 14

Comment définissez-vous Redux par rapport à React ?

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] Redux permet de mettre en place la navigation entre composant.
* [ ] Redux permet de gérer l'asynchrone dans React.
* [ ] Redux permet de gérer un store global dans React.
* [ ] Redux permet de faire remonter les erreurs React dans des logs.

## Question 15

Que pensez-vous de la manière de modifier le state de Redux ci-dessous ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js
const stateInit = {
    students: [
        { id: 1, name: "Alice", notes: [11, 12, 18] },
        { id: 2, name: "Alan", notes: [10, 14.5, 11] },
        { id: 3, name: "Phil",  notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley",  notes: [9, 7, 11] },
    ]
}

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_NOTES:
            const { name, note } = action.payload;

            state.students.map(s => {
                if(s.name === name) s.notes.push(note)
            });

            return {
                ...state
            }

        return state;
    }
}
```

*Réponses* :
* [ ] Lorsqu'on met à jour le state, il faut changer la source de vérité.
* [ ] Lorsqu'on met à jour le state, il ne faut paschanger la source de vérité.
* [ ] Ce code n'est pas valide, il n'y a pas de state dans Redux.

## Question 16

A quoi sert le module thunk-redux ?

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] Il sert à gérer des actions asynchrone dans Redux
* [ ] Il sert à gérer les logs d'erreur dans Redux.
* [ ] Il sert à séparer le store en plusiers sous-parties.
* [ ] Il sert à créer un système de cache pour le store.

## Question 17

Qu'est que le combineReducer dans Redux ?

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] Il est un sucre syntaxique, il ne sert à rien.
* [ ] Il permet de faire du Single Responsability.
* [ ] Il permet de faire des bundles exportables.

## Question 18

Comment situez-vous l'action du middleware dans Redux

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] Il se situe entre le dispatch et le reducer.
* [ ] Il se situe entre le reducer et les actions.
* [ ] Il se situe entre les actions et le store.
* [ ] Il se situe entre le store et le reducer.

## Question 19

Comment s'écrit un middleware ? 

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :

* [ ] Il s'écrit 
```js
const customMiddleware = next => action => store => {
  // ...
}
```

* [ ] Il s'écrit 
```js
const customMiddleware = store => next => action => {
  // ...
}
```
* [ ] Il s'écrit 
```js
const customMiddleware = next => store => action => {
  // ...
}
```

* [ ] Il s'écrit 
```js
const customMiddleware = store => action => {
  // ...
}
```
