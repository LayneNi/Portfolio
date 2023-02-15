import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import ContactUs from "./Skills/form/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import { IconContext } from "react-icons";
import { AiFillHtml5, AiFillFileText } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const haiku = "HTML \n  \n CSS \n \n JavaScript \n  \n NodeJs \n \n MySql";
const haiku2 = "React \n  \n NoSql \n \n JavaScript \n  \n NodeJs \n \n MySql";
function replaceWithBr() {
  return haiku.replace(/\n/g, "<br />");
}

function replaceWithBr2() {
  return haiku2.replace(/\n/g, "<br />");
}

// function getIcon(iconText){
//   switch (iconText) {
//     case "HTML5":
//       return <AiFillHtml5 className="iconHover" />
//     case "CSS":
//       return <DiCss3 className="iconHover" />
    
//     default:
//         <SiMysql className="iconHover" />
//       break;
//   }
// }

function SkillForm() {

  // <Typography>
  //             <IconContext.Provider value={{ color: "white", size: "40px" }}>
  //               <IconButton
  //                 href="https://developer.mozilla.org/en-US/docs/Web/CSS"
  //                 sx={{ p: 0 }}
  //               >
  //                 <DiCss3 className="iconHover" />
  //                 <h3 class="skillText">CSS</h3>
  //               </IconButton>
  //             </IconContext.Provider>
  //           </Typography>

  //           <Typography>
  //             <IconContext.Provider value={{ color: "white", size: "40px" }}>
  //               <IconButton
  //                 href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  //                 sx={{ p: 0 }}
  //               >
  //                 <SiJavascript className="iconHover" />
  //                 <h3 class="skillText">JavaScript</h3>
  //               </IconButton>
  //             </IconContext.Provider>
  //           </Typography>

  //           <Typography>
  //             <IconContext.Provider value={{ color: "white", size: "40px" }}>
  //               <IconButton
  //                 href="https://developer.mozilla.org/en-US/docs/Web/API/Node"
  //                 sx={{ p: 0 }}
  //               >
  //                 <FaNodeJs className="iconHover" />
  //                 <h3 class="skillText">NodeJs</h3>
  //               </IconButton>
  //             </IconContext.Provider>
  //           </Typography>

  //           <Typography>
  //             <IconContext.Provider value={{ color: "white", size: "40px" }}>
  //               <IconButton
  //                 href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
  //                 sx={{ p: 0 }}
  //               >
  //                 <FaNodeJs className="iconHover" />
  //                 <h3 class="skillText">ExpressJs</h3>
  //               </IconButton>
  //             </IconContext.Provider>
  //           </Typography>

  //           <Typography>
  //             <IconContext.Provider value={{ color: "white", size: "40px" }}>
  //               <IconButton href="https://dev.mysql.com/doc/" sx={{ p: 0 }}>
  //                 <SiMysql className="iconHover" />
  //                 <h3 class="skillText">MySql</h3>
  //               </IconButton>
  //             </IconContext.Provider>
  //           </Typography>
  const skillsArr = [
    {
      text: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: <AiFillHtml5 className="iconHover" />
    },
    {
      text: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <DiCss3 className="iconHover" />
    },
    {
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript className="iconHover" />
    },
    {
      text: "NodeJS",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Node",
      icon: <FaNodeJs className="iconHover" />
    },
    {
      text: "Express",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
      icon: <FaNodeJs className="iconHover" />
    },
    {
      text: "MySQL",
      link: "https://dev.mysql.com/doc/",
      icon: <SiMysql className="iconHover" />
    },
    
  ];
  return (
    <>
      <div className="skillForm">
        <Box
          id="Skills"
          className="skillSection"
          border={1}
          borderColor="white"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={24}
          sx={{
            // width: "100%",
            marginTop: 1,
            // marginLeft: .5,
            // marginRight: 0.5,
            flexDirection: "column",
            height: 600,
            backgroundColor: "#2E3B55",
            "&:hover": {
              backgroundColor: "#2E3B55",
              fontSize: 26,
              boxShadow: 5,
            },
          }}
        >
          <Typography class="neonText" color="White" >
            <h1 id="skillHeader">Skills</h1>
          </Typography>
          <Typography
            display={"flex"}
            margin="0"
            className="skillTextSection"
            color="White"
            marginBottom={0}
            sx={{
              px: 1
            }}
          >
            {skillsArr.map(skill => {
              return <Typography>
              <IconContext.Provider value={{ color: "white", size: "40px" }}>
                <IconButton
                  href={skill.link}
                  sx={{ p: 0 }}
                >
                  {skill.icon}
                  {/* {() => getIcon(skill.text)} */}
                  <h3 class="skillText">{skill.text}</h3>
                </IconButton>
              </IconContext.Provider>
            </Typography>
            })}
          </Typography>
          
        </Box>
        
        <Box
          id="Contact Me"
          className="contactMeQuery"
          border={1}
          borderColor="white"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={24}
          sx={{
            // width: "100%",
            marginTop: 1,
            // marginLeft: .5,
            // marginRight: 0.5,
            flexDirection: "column",
            height: 600,
            backgroundColor: "#2E3B55",
            "&:hover": {
              backgroundColor: "#2E3B55",
              fontSize: 26,
              boxShadow: 5,
            },
          }}
          md={{
            width: "100%",
            marginTop: 1,
            marginLeft: .5,
            marginRight: 0.5,
            flexDirection: "column",
            height: 600,
            backgroundColor: "#2E3B55",
            "&:hover": {
              backgroundColor: "#2E3B55",
              fontSize: 26,
              boxShadow: 5,
            },
          }}
        >
            <Typography
            class="neonText"
            id="contactMeText"
            color="White"
            marginBottom={30}
          >
            Contact Me
          </Typography>
          <div  className="formSection">
          <ContactUs/>
          </div>
        </Box>
      </div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script
        src="https://kit.fontawesome.com/8638d0ac87.js"
        crossorigin="anonymous"
      ></script>
      <script type="text/javascript">emailjs.init('Zr22jefdTB8t3hG2u')</script>
    </>
  );
}

{
  /* <Box
id="Contact Me"
className="conactMeQuery"
border={1}
borderColor="white"
borderRadius="10px"
display="flex"
justifyContent="center"
alignItems="center"
fontSize={24}
sx={{
  width: "50%",
  marginTop: 1,
  marginLeft: 0.5,
  marginRight: 5,
  height: 600,
  backgroundColor: "#2E3B55",
  float: "right",
  displayFlex: "inline",
  "&:hover": {
    backgroundColor: "#2E3B55",
    fontSize: 26,
    boxShadow: 5,
  },
}}
>
<Typography
  class="neonText"
  id="contactMeText"
  color="White"
  marginBottom={30}
>
  {" "}
  Contact Me
</Typography>
<div className="formSection">
  <ContactUs />
</div>
</Box> */
}

export default SkillForm;
