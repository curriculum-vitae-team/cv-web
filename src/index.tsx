import { createRoot } from 'react-dom/client'
import './i18n'
import { App } from './components/app'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
