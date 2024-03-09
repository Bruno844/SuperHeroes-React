import { Navigate, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../auth'
import {HeroesRoutes} from '../heroes'
import {PrivateRoutes} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login/*" element={
          <PublicRoute>
            {/* <LoginPage /> */}
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        }
        />



        {/**ruta para el login */}
        {/* <Route path='login' element={<LoginPage />} /> */}


        <Route path='/*' element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        } />




      </Routes>

    </>
  )
}
