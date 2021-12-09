const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// const dispatch = useDispatch();
// const toggleFavorites = () =>
//   dispatch(AuthReducerFunctions.toggleFavorites());
//   const pokemonsFavorites = (pokemonsFavs, id) => {
//     pokemonsFavs.includes(id)
//       ? pokemonsFavs.filter(el => el !== id)
//       : [...pokemonsFavs, id];

//     toggleFavorites(pokemonsFavorites);
//   };

export {validateEmail};
