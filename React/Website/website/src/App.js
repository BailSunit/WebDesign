import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/aboutUs";
import Jobs from "./Jobs/Jobs"
import ContactUs from "./ContactUs/ContactUs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h1 align="center">Snackout!</h1>
            <ul className="header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs">About US</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} ></Route>
              <Route path="/aboutUs" element={<AboutUs />}></Route>
              <Route path="/jobs" element={<Jobs />}></Route>
              <Route path="/contactUs" element={<ContactUs />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
