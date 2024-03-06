import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import { Router } from 'src/router'

import 'src/styles/fonts.css'
import 'src/styles/normalize.css'

const App = (): JSX.Element => {
  return (
    <Suspense
      fallback={
        <Stack align="center" justifyContent="center" style={{ height: '100vh' }}>
          <Loader />
        </Stack>
      }
    >
      <RouterProvider router={Router} />
    </Suspense>
  )
}

export default App
