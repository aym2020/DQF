import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Rules from './pages/rules'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rules',
    element: <Rules />
  }
])

export default router
