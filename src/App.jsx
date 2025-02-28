import React from "react";
import Navbar from "./components/Navbar";
import { ThemeContextWrapper } from "./context/Theme";
import Hero from "./components/Hero";

import Carousel from "./components/Carousel";
import Resume from "./components/Resume";

const App = () => {
  return (
    <ThemeContextWrapper>
      <Navbar />
      <Hero />
      <Carousel />
      <Resume />
    </ThemeContextWrapper>
  );
};

export default App;
