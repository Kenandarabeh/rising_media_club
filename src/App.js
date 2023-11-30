import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen/index.jsx";
import Team from "./Pages/Home/Homescreen/Team.jsx";
import AboutUS from "./Pages/Home/Homescreen/AboutUs.jsx";
import Events from "./Pages/Home/Homescreen/Events.jsx";
import OurTeam from "./Pages/Home/Homescreen/OurTeam.jsx";
import AboutOurEvent from "./Pages/Home/AboutOurEvent .jsx";
import ContactUs from "./Pages/Home/ContactUs.jsx";
import Footer from "./Pages/Home/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Team" element={<Team />}>
            </Route>
            <Route path="/AboutUs" element={<AboutUS />}></Route>
            <Route path="/Events" element={<Events />}></Route>
            <Route path="/ourEvent/:id" element={<AboutOurEvent />}></Route>
            <Route path="/joinUs" element={<ContactUs />}></Route>
            <Route path="/ourteam/:id" element={<OurTeam />}></Route>

            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
