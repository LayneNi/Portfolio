import { GoMarkGithub, GoMailRead } from "react-icons/go";
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiFillFileText } from "react-icons/ai";
import * as React from 'react';


function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenMail = (event) => {
  setAnchorElNav(event.currentTarget);
};
    return (
      <>
      
        <footer>
        <div class="wrapper" id="neon" >
        <IconContext.Provider value={{ color: 'white', size: '40px' }}>
        <GoMailRead 
        anchorEl={anchorElNav}
        onClick={handleOpenMail}
        />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'white', size: '40px'}}>
        <AiFillFileText/>
        </IconContext.Provider>
    <div class="main-div main-div1">
      <h1>Layne</h1>
    </div>
    <div class="main-div main-div2">
      <h1>Nigro</h1>
    </div>
    <div class="main-div main-div3">
      <h1>Portfolio</h1>
    </div>
    <IconContext.Provider value={{ color: 'white', size: '40px' }}>
    <GoMarkGithub/>
    </IconContext.Provider>
    <IconContext.Provider value={{ color: 'white', size: '40px' }}>
    <AiFillLinkedin/>
    </IconContext.Provider>
  </div>
  
        </footer>
        
  
      </>
    );
  }
  
  export default Footer;
  