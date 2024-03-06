import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RoutesPath } from './routes'

const Login = lazy(() => import('src/pages/Login'))
const ForgotPassword = lazy(() => import('src/pages/ForgotPassword'))
const NewPassword = lazy(() => import('src/pages/NewPassword'))

export const Router = createBrowserRouter([
  {
    path: RoutesPath.LOGIN,
    element: <Login />,
  },
  {
    path: RoutesPath.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: RoutesPath.NEW_PASSWORD,
    element: <NewPassword />,
  },
])
