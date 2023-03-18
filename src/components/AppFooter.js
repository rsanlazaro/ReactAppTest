import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          Aplicación
        </a>
        <span className="ms-1">Archivo de prueba</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Febrero 2022</span>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          Enlace a Youtube
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
