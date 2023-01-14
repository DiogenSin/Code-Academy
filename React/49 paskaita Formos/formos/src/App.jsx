import SignIn from './components/SignIn';
import Form from './components/form';
import './App.css';
import { useState } from 'react';

function App() {
  const [arPrisijunges, setArPrisijunges] = useState(false)
  return (
    <>
      {arPrisijunges ? 'Prisijungęs' : <SignIn prisijungti={setArPrisijunges}/>}
      <Form />
    </>

  );
}

export default App;
