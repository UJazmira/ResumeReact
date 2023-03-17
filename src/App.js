import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyHobby from "./Components/MyHobby/MyHobby";
import ResumeList from "./Components/ResumeList/ResumeList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ResumeList />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hobby" element={<MyHobby />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
