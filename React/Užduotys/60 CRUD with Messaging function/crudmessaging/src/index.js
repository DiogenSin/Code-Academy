import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MainProvider } from './components/contexts/MainContexts';
import { PostProvider } from './components/contexts/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MainProvider>
            <PostProvider>
                <App />      
            </PostProvider>    
        </MainProvider>
    </BrowserRouter>


);
