import './App.css';
import Cards from './components/Cards';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import Card from './components/Card';
import {Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([
    {
      tekstas:'labas',
      id: 1
    },
    {
      tekstas:'mano',
      id: 2
    },
    {
      tekstas:'vardas',
      id: 3
    },
    {
      tekstas:'yra',
      id: 4
    },
    {
      tekstas:'auksinis',
      id: 5
    },
    {
      tekstas:'kardas',
      id: 6
    }
  ])

  return (
    <>
      <header>
        <h1>Hello, nav here</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/cards">Cards</Link></li>
          </ul>
        </nav>
      </header>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<UserRegistration/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/cards' element={<Cards
      data={cards}
      />} />
      <Route path='cards/card/:id' element={<Card
            data={cards}
      />} />
            <Route path='/*' element={
              <>
              <h1>404 not found</h1>
              </>
              
              } />

    </Routes>

    </>
  );
}

export default App;