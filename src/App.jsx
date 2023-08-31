import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import Navbar from "./components/layout/Navbar";
import Profile from "./pages/Profile"
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/profile" element={<><Navbar/><Profile/></>} />
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
