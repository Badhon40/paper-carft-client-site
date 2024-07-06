import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import FirebaseProvider from './firebaseProvider/FirebaseProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <FirebaseProvider>
   <RouterProvider router={Routes}></RouterProvider>
   </FirebaseProvider>
    
  </React.StrictMode>,
)
