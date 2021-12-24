// LIBRARY IMPORTS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import EasterEgg from "./pages/EasterEgg";
import UserProfile from "./pages/UserProfile";

// COMPONENTS
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// STATE
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col items-center justify-between min-h-screen font-defaultFont">
            <Navbar />
            <main className="h-fit w-11/12 flex flex-col px-4 py-6 bg-accentColor text-3xl xl:w-10/12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<UserProfile />} />
                <Route path="/easteregg" element={<EasterEgg />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}
export default App;
