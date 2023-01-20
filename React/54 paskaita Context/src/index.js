import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToDosProvider } from './ToDosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <ToDosProvider>
    
    <App />
    
    </ToDosProvider>


);
