import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar"
import TopNavbar from "./TopNavbar/TopNavbar"

//import Dashboard from "./Dashboard/Dashboard";
import Admission from "./Admission/Admission"
import Class7 from "./Class7/Class7"
import Header from "./header/Header";

const App = () => {
  return (
    <>
      <Router>

        <Header propsvar={'akash bala test'} />
        
        {/* <TopNavbar /> */}
        {/* <Navbar /> */}

       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Admission />
              </>
            }
          />
          {/* <Route path="/Admission" element={<Admission />} /> */}
          {/* <Route path="/Class7" element={<Class7 />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
