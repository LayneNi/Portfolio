import * as React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainCard from "./component/MainCard";
import SkillForm from "./component/Skills/SkillForm";
import ContactUs from "./component/Skills/Skills/form/form"

function App() {
  document.body.classList.add('background-color')
  return (

    <>
      <Header />
      <MainCard/>
      <SkillForm/>
      
      <Footer />
    </>
  );
}

export default App;
