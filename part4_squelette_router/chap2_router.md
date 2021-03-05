# Router

## Router React

Nous allons installer **React Router**, une librairie implémentant la gestion des routes. Cette librairie permettra de connecter une route à un Component donné.

En utilisant cette libraire, nous sommes dans le cadre d'une SAP (single application page). Il n'y a pas de requête HTTP côté client, de fait, tout se passe dans la page du navigateur et en Javascript.

```bash
npm install react-router-dom --save
```

Il faudra par la suite importer les modules suivants dans l'application :

```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

Pour définir une route avec cette librairie, attention à la syntaxe des urls de routes elles doivent commencées par "/", vous écrirez :

- En HTML

```html
<a href="/" >Home</a> 
```

- Avec le router

```js
<link to="/" >Home</link>
```

Une route sera connectée à un composant donné de la manière suivante :

```jsx
<Router>
    <Link to="/" >Home </Link>
    <Route exact path="/" component={Home} />
</Router>
```

Une autre syntaxe permet également de connecter une route à un composant :

```jsx
<Router>
    <Link to="/" >Home </Link>
    <Route exact path="/">
        <Home />
    </Route>
</Router>
```

*Remarques :*

L'attribut **exact** permet de faire correspondre uniquement l'url "/" avec cette route. Si vous ne mettez pas exact d'autres urls pourront correspondre également : "/a", "/a/b", ...

```jsx
// les routes suivantes match : "/", "/a", "/a/b", ...
<Router>
    <Link to="/" >Home </Link>
    <Route path="/">
        <Home />
    </Route>
</Router>
```

On met souvent exact pour l'url racine de l'application.

## Plusieurs routes

Si vous avez plusieurs routes à gérer dans votre application, vous devez utiliser la balise **switch**. 

Lorsqu'il y a plusieurs routes à rendre la méthode switch utilisera la première route trouvée pour faire la correspondance :

```js
<Router>
    <div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
    </ul>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route  path="/login">
            <Login />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
    </Switch>
    </div>
</Router>

```

\newpage

## Gestion de paramètres dans une route

Vous pouvez passer des paramètres à une route. Dans ce cas utiliser la syntaxe ":param" pour désigner le paramètre variable dans l'url.

Par exemple si vous avez des posts avec leur id vous écrirez dans le code React :

```js
{
    posts.map((post, i) => ( <Link to={`/post/${post.id}`}>{post.title}</Link> ) )
}

```

D'un autre côté vous connecterez chaque url à un pattern à déterminer avec un paramètre variable :

```js

<Switch>
    <Route path="/post/:id" component={<Post />} />
</Switch>

```

Pour récupérer le paramètre id dans l'url il faudra alors dans le contexte du Router utiliser la variable match dans les props :

```js

// id correspond au nom de la clé définit plus haut dans la route
const { params : { id }, path, url } = this.props.match;

```

La variable path designe le pattern /post/:id et url l'url concrète dans le code par exemple /post/12. La clé params permet de récupérer les paramètres de la route.

## Redirection & PrivateRoute

La redirection est simple à comprendre elle doit-être faites dans le contexte du Router, par exemple dans le composant Post suivant l'article dont l'id = 4 est privé et demande par exemple une authentification (non détaillé dans l'exemple) :

```js
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Post extends Component{

    render(){

        const { params } = this.props.match;
        
        // Article privé
        if(params.id == 4){

            return(
                <Redirect
                    to="login"
                />
            )
        }

        return (
            <article>
                <h1>Article </h1>
                <p>...</p>
            </article>
        );
    }
}

```

- PrivateRoute

Vous pouvez protéger des routes avec React Router et mettre en place un système de redirection, c'est pratique lorsqu'on souhaite par exemple protéger un dashboard pour administrer des contenus. 

```js
<Router>
    <div>
    <ul>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
    </ul>
    <Switch>
        <PrivateRoute path="/dashboard">
            <Dashboard />
        </PrivateRoute>
    </Switch>
    </div>
</Router>

```

Dans le composant PrivateRoute, attention la logique est sur de la composition :

```js

class PrivateRoute extends React.Component{

    render(){
        const { children, ...rest } = this.props;
        const isLogged = true;

        return (
            <Route 
                { ...rest }
                render={ ({location}) => 
                isLogged ? this.props.children :
                <Redirect 
                    to={{pathname : '/login', state : { from : "/"}}} 
                />
                }
            />
        );
    }
}

```

Exemple d'utilisation dans le composant App.js là où est défini votre router, si vous changez la valeur de la propriété isLogged dans le composant PrivateRoute vous serez soit redirigé vers la page login, soit vous afficherez Je suis logged !

```js
import { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch,
} from "react-router-dom";

class App extends Component{
    render(){
        return(
            <Router>
                <ul>
                    <li><Link to="/" >Home </Link></li>
                    <li>
                    <Link to="/protected">protected</Link>
                    </li>
                </ul>
                <Switch>
                    <PrivateRoute path="/protected">
                        <p>Je suis logged !</p>
                    </PrivateRoute>
                    <Route path="/login">
                        <p>Page de login</p>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

```

## Gestion de la route NoMatch

Si aucune route ne match vous utiliserez la syntaxe suivante pour afficher un contenu adéquat :

```js
<Router>
    <Nav />
     <Switch>
        <Route path="*">
            <p>No Match</p>
        </Route>
     </Switch>
</Router>
```

### Exercices Tables de multiplication & Jeux Mathématiques

### Partie 1

Installez le projet **multiplication** avec CRA.

L'application proposera trois "pages"

1. Une page d'accueil qui présentera l'application.

2. Une page proposant les 10 tables de multiplications de 1 à 10.

3. Une page pour s'entrainer à apprendre les tables de multiplication.


### Wireframes

La page d'accueil affichera un petit texte présentant l'app avec le texte suivant :

```txt
Vous pouvez dans cette application consulter les 10 tables de multiplications ou vous entraînez à apprendre ces tables à l'aide d'un jeu.
```

#### La page principale

```txt
[**Home**] [tables] [jeu]

Vous pouvez dans cette application consulter les 10 tables de multiplications ou vous entraînez à apprendre ces tables à l'aide d'un jeu.
```

### La page des tables 

Les titres des tables ci-dessous sont cliquables et affichera une fois cliqué la table de multiplication en question.

```txt
[Home] [**tables**] [jeu]

Choisissez une table :

    [Table de multiplication 1]
    [Table de multiplication 2]
    [Table de multiplication 3]
        3X1 = 3
        3X2 = 6
        3X3 = 9
        ...
        3X10 = 30
    ...
    [Table de multiplication 10]
```

### Partie 2 le jeu 

Sur cette page vous proposez des multiplications à deviner. 

Proposerez 10 multiplications à deviner. Une fois que l'on a terminé les 10 questions, on redirige l'utilisateur vers une page qui affichera son score. On proposera à l'utilisateur de rejouer. Dans ce cas son score sera ré-initialisé à 0 pour une nouvelle partie.

Le calcul du score se fera très simplement : 
si vous répondez correctement on a +1 point et 0 sinon.

```txt
[Home] [tables] [**jeu**]

Combien font 5 X 9 
votre réponse [ ]
[valider]
```

La page des scores :

```txt
[Home] [tables] [**jeu**]

Votre score : 8/10

Voulez-vous rejouer ? 
[Faire une autre partie]

```

#### Option facultatif 

Gérez le temps de réponse de l'utilisateur. Créez un compteur pour la réponse de l'utilisateur. Ce dernier affectera le calcul de son score final.
