import React from "react";
import Navbar from "./components/Navbar";
import Baner from "./components/Baner";
import Cards from "./components/Cards";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Baner />
      <Cards />
      <Search />
    </div>
  );
};

export default App;
