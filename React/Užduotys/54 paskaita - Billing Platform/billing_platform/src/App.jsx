import { Route, Routes, Link } from "react-router-dom";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";

function App() {


  return (
<>
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/edit'>Edit</Link></li>
        <li><Link to='/add'>Add</Link></li>
      </ul>
    </nav>
      
    </header>

    <main>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/add" element={<Add/>}/>

      </Routes>
    </main>

</>
  );
}

export default App;
