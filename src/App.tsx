import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Loader from 'src/components/Loader'
import Stack from 'src/components/Stack'
import { Router } from 'src/router'

import 'src/styles/fonts.css'
import 'src/styles/normalize.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, refetchOnMount: false },
  },
})

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <Stack align="center" justifyContent="center" style={{ height: '100vh' }}>
            <Loader />
          </Stack>
        }
      >
        <RouterProvider router={Router} />
      </Suspense>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
