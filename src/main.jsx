import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import FirebaseProvider from './pages/FirebaseProvider/FirebaseProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
    
  </React.StrictMode>,
)
