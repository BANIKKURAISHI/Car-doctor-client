import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRoute from './MainLayout/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <AuthProvider>
  <RouterProvider router={myCreateRoute} />
  </AuthProvider>
 </React.StrictMode>

)
