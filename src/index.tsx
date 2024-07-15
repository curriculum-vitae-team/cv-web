import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sentry'
import './i18n'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { App } from './components/app'

injectSpeedInsights({ debug: false })

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
