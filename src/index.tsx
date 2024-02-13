import { createRoot } from 'react-dom/client'

import App from 'src/App'

import './index.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No root found')
}

createRoot(root).render(<App />)
