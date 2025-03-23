import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Store } from './app/Store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={ Store }>
    <App />
  </Provider >,
)
