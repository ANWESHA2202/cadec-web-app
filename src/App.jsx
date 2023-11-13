import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Grievence from "./pages/grievence";
import Footer from "./components/layout/Footer";
import ResearchWorks from "./pages/research-works";
import Placements from "./pages/placements";
import StudyMaterials from "./pages/study-materials";
import Notes from "./pages/notes";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <Profile />
                    <Footer />
                  </>
                }
              />
            }
          />

          <Route
            path="/grievence"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <Grievence />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/study-materials"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <StudyMaterials />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/study-materials/notes"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <Notes />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/research-works"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <ResearchWorks />
                    <Footer />
                  </>
                }
              />
            }
          />
          <Route
            path="/placements"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Navbar />
                    <Placements />
                    <Footer />
                  </>
                }
              />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
