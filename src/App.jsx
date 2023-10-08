import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home"
import Profile from "./pages/profile"
import Grievence from "./pages/grievence";
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar/><Home/></>} />
        
        <Route path="/profile" element={<><Navbar/><Profile/></>} />
        <Route path="/grievence" element={<><Navbar/><Grievence/></>} />

        
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
