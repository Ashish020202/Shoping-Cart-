import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import {About} from "./pages/About"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"

function App() {
  
  return (
    <>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
     
       
    </>
  )
}

export default App
