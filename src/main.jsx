import ReactDOM from 'react-dom/client'
import { router } from './router/router.jsx'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router'
import './index.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
