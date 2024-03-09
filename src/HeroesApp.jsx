import AuthProvider from "./auth/context/AuthProvider"
import {AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (

    //de esta manera tenemos el control de la autenticacion a nivel global de aplicacion, por ende podemos manejar rutas protegidas
    <AuthProvider>


      <AppRouter/>
  
    
    </AuthProvider>
  )
}

