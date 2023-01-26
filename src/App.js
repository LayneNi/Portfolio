import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainCard from "./component/MainCard";


function App() {
  document.body.classList.add('background-color')
  return (

    <>
      <Header />
      <MainCard/>
      <Footer />
    </>
  );
}

export default App;
