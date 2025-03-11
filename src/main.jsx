import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { FinanceProvider } from './context/FinanceContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { CustomizeContextProvider } from './context/CustomizeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FinanceProvider>
          <CustomizeContextProvider>
            <App />
          </CustomizeContextProvider>
        </FinanceProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
