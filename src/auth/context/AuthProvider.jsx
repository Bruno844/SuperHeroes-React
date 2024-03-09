//archivo que usa el context para proveer toda la logica hacia la aplicacion
import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

//aca declaramos que el estado inicial a la hora de inicio de sesion es falsa, que aun no esta logueado
// const initialState = {
//     logged: false
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));


  return {
    logged: !!user,
    user: user
  }
}



const AuthProvider = ({children}) => {


  const [authState, dispatch] =  useReducer(authReducer, {}, init)


  const onLogin = async (name= '' ) => {

    const user = {id: 'ABC', name} 

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user) )



    dispatch(action)

  }


  const logout = () => {
    localStorage.removeItem('user');
    const action = {type: types.logout};
    dispatch(action)
  }




  return (
    //vamos a poder usar los componentes hijos dentro de aca
        <AuthContext.Provider value={{ 
          ...authState,

          //metodos
          login: onLogin,
          logout: logout
        }}>
            
            {children}

        </AuthContext.Provider>
  );
}

export default AuthProvider