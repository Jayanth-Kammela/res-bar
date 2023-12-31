import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
