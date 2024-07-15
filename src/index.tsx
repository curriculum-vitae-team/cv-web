import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/sentry'
import './config/i18next'
import { App } from './components/app'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
