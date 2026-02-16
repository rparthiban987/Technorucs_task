import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import  "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css";
import 'primeflex/themes/primeone-light.css'  
import 'primeflex/themes/primeone-dark.css'
import 'primereact/resources/themes/mdc-light-indigo/theme.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
