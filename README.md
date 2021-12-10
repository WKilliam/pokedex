# Pokedex

## Comment lancer le projet ?

- Premièrement nous devons lancer la commande "yarn metro" dans notre terminale. Cette commande active donc notre serveur react en local.

- Ensuite il nous faut lancer nos émulateurs (IOS et Android venant de Xcode et Android Studio) pour tester l'application. Les commandes que nous utilisons sont "yarn ios" et "yarn android".

## Quelle API est utilisée ?

- l'API que nous avons utilisé est "PokéAPI", cette API représente un Pokédex (une encyclopédie contenant tous les Pokémon de la franchise du même nom).

## Que contient l'application ?

1 - La première page est la page où se trouve l'authentifaction par Google qui permet à l'utilisateur d'accèder au reste de l'application.

2 - La deuxième page est une liste contenant tous les Pokémon de toutes les régions avec :

- Leurs différentes formes
- Leurs évolutions

Une barre de recherche est également présente pour faciliter la recherche de l'utilisateur. Une fois que le Pokémon recherché est trouvé, l'utilisateur peut appuyer dessus afin d'accèder à la troisième page.

3 - La troisième page contient les informations du Pokémon sélectionné, on y retrouve :

- Son nom
- Son apparence
- Son type ou son double type
- Ses capacités spéciales
