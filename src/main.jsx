import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './pages/colorcontext/ColorContext.jsx';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <ColorProvider> 
          <App />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </ColorProvider>
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);
