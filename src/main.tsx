import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Diploma from './pages/Diploma'
import Onboarding from './pages/Onboarding'
import StageDetail from './pages/StageDetail'
import './styles/global.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/onboarding',
    element: <Onboarding />
  },
  {
    path: '/diploma',
    element: <Diploma />
  },
  {
    path: '/stage/:stageId',
    element: <StageDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
