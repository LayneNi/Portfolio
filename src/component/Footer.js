import { GoMarkGithub, GoMailRead } from "react-icons/go";
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiFillFileText } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
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
        <IconButton className="iconHover"  sx={{ p: 0 }}>
          <a href="mailto:laynenigro@gmail.com"><GoMailRead /></a>
        </IconButton>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'white', size: '40px'}}>
        <IconButton className="iconHover" href="https://drive.google.com/file/d/1sCKVoXcXd3sRbMiSe8Vx6Bsv9rcYdxUU/view?usp=sharing" sx={{ p: 0 }}>
        <AiFillFileText/>
        </IconButton>
        
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
    <IconButton className="iconHover" href="https://github.com/LayneNi" sx={{ p: 0 }}>
    <GoMarkGithub/>
        </IconButton>
    
    </IconContext.Provider>
    <IconContext.Provider value={{ color: 'white', size: '40px' }}>
    <IconButton className="iconHover" href="https://www.linkedin.com/in/layne-nigro-b91184255/" sx={{ p: 0 }}>
    <AiFillLinkedin/>
        </IconButton>
    
    </IconContext.Provider>
  </div>
  
        </footer>
        
  
      </>
    );
  }
  
  export default Footer;
  