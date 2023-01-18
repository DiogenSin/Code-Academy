import './App.css';
import Form from './components/Form';
import SignIn from './components/SignIn';
import { useState } from 'react';

const App = () => {
  const [arPrisijunges, setArPrisijunges] = useState(false);

  return (
    <>
      {
        arPrisijunges ? 
        "Prisijunges" : 
        <SignIn 
          prijungti={setArPrisijunges}
        />
      }
      <hr />
      <Form />
    </>
  );
}

export default App;