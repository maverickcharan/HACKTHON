import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // <-- import BrowserRouter
import { ShopProvider } from './context/shopcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* <-- wrap App with BrowserRouter */}
      <ShopProvider>
        <App />
      </ShopProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>
);
