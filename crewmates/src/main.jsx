import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Routes/Layout.jsx'
import CreateCrewmate from './Components/CreateCrewmate.jsx'
import CrewmateGallery from './Components/CrewmateGallery.jsx'
import EditCrewmate from './Components/EditCrewmate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route path="new" element={<CreateCrewmate />} />
            <Route path="gallery" element={<CrewmateGallery />} />
            <Route path="edit/:id" element={<EditCrewmate />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
