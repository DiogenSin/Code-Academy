import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/UserContext'
import { PostProvider } from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>


);
