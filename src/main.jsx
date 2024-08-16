import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './pages/colorcontext/ColorContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ColorProvider> 
        <App />
      </ColorProvider>
    </BrowserRouter>
  </StrictMode>
);
