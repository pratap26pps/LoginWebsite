
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Dasboard from './component/Dasboard';
import Navbar from './component/Navbar';
import Singhup from './component/Singhup';
import { useEffect, useState } from 'react';
function App() {

  const [islogedin,setislogedin]=useState(false);


  return (
    <div className="App">
      
     <Navbar
     islogedin={islogedin}
     setislogedin={setislogedin}/>


     <Routes>
        <Route path="/about" element={<About/>}  ></Route>
        <Route path="/contact" element={<Contact/>}  ></Route>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path="/login" element={<Login setislogedin={setislogedin} />}  ></Route>
        <Route path="/signup" element={<Singhup  setislogedin={setislogedin}/>}  ></Route>
        <Route path="/dasboard" element={<Dasboard/>}  ></Route>
     </Routes>
    </div>
  );
}

export default App;
