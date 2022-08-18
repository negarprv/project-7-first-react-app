import React from "react";
import Navbar from "./components/Navbar";
import Baner from "./components/Baner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Citys from "./components/Citys";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Baner />
      <Cards />
      <Search />
      <Citys />
      <Footer />
    </div>
  );
};

export default App;
