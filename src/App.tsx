import { RouterProvider } from 'react-router-dom'

import { Router } from 'src/router'

import './styles/fonts.css'
import './styles/normalize.css'

const App = (): JSX.Element => {
  return <RouterProvider router={Router} />
}

export default App
