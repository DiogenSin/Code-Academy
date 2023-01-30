import './styles/App.css';
import Header from './components/organisms/Header';
import {Routes, Route} from 'react-router-dom'
import Chat from './components/pages/Chat';
import Favourites from './components/pages/Favourites';
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import MainContexts from './components/contexts/MainContexts';
import { useContext } from 'react';
import Unlogged from './components/pages/UnLogged';
import Registration from './components/pages/Registration';

function App() {

  const {loginStatus} = useContext(MainContexts)

  return (
    <>
      <Header/>

      <main>
      {
        loginStatus ?
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={
                <>
                <h1>404 not found</h1>
                </>
                
                } />

        </Routes>
        :
        <>
        <Routes>
          <Route path='/' element={<Unlogged />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        </>

      }
      </main>
    </>

  );
}

export default App;
