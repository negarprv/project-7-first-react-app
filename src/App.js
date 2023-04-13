import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Provinces from "./components/Provinces";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/provinces" component={Provinces}></Route>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/contactus" component={ContactUs}></Route>
        <Route exact path="/" component={Landing}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
