import {
    SET_CHOICE,
    CHECK_MULTIPLICATION
  } from "../constants/actions";
  
  // SOURCE DE VERITE
  const stateInit = {
    count: 10, // information pour l'utilisateur
    score: 0,
    message: "",
    choice: "", // données saisies de l'utilisateur si 7X3 => il va appuyer sur 2 puis 1
    success: null, // true ou false selon ce qu'aura proposé l'utilisateur
  };
  
  const reducer = (state = stateInit, action = {}) => {
   
    switch (action.type) {
      case SET_CHOICE:
        const { number } = action.payload;
  
        return {
          ...state,
            choice : state.choice + number  
        };
  
  
      case CHECK_MULTIPLICATION:
        
        return {
          ...state,
            // TODO VEIRIFIER LE CHOIX DE L'UTILISATEUR
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  