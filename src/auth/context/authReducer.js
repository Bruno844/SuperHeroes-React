import { types } from "../types/types";


//asi podemos manejar un estado con un reducer, usando el switch para evaluar una condicion u otra, y en base a eso hacer una accion en particular, en este caso es sobre el manejo de la autenticacion

export const authReducer = (state = {} , action) => {

    switch(action.type){

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return  {
                logged: false
            }
        default:
            return state;
    }

}