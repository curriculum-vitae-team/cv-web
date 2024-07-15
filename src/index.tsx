import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sentry'
import './i18n'
import { App } from './components/app'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
