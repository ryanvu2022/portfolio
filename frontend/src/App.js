import React from "react";
import { Navbar, About, Footer, Header, Skills, Work } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />     
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;