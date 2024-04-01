import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Login from "./Components/Login"

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
