import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

// const btn = document.getElementById('btn');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_fvjmqkr';
//    const templateID = 'template_ner8j1u';

//    emailjs.sendForm(serviceID, templateID, this, 'Zr22jefdTB8t3hG2u')
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });



const haiku = "HTML \n  \n CSS \n \n JavaScript \n  \n NodeJs \n \n MySql";
const haiku2 = "React \n  \n NoSql \n \n JavaScript \n  \n NodeJs \n \n MySql";
function replaceWithBr() {
  return haiku.replace(/\n/g, "<br />")
}

function replaceWithBr2() {
  return haiku2.replace(/\n/g, "<br />")
}

function SkillForm() {
  return (
    <>
      <div class="skillForm">
        <Box
          id="Skills"
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
            marginLeft: 5,
            marginRight: 0.5,
            height: 400,
            backgroundColor: "#2E3B55",
            "&:hover": {
              backgroundColor: "#2E3B55",
              fontSize: 26,
              boxShadow: 5,
            },
          }}
        >
          <Typography class="neonText" color="White" marginBottom={30}>
            {" "}
            <h1>Skills</h1>
          </Typography>
          <Typography display={"flex"} margin="5" className="skillText" color="White" marginBottom={0}  
          sx={{
            padding: 5
          }}>

            <h3 dangerouslySetInnerHTML={{__html: replaceWithBr()}} class="skillText" />
            <h3 dangerouslySetInnerHTML={{__html: replaceWithBr2()}}  class="skillText" />

          </Typography>
        </Box>
        <Box
          id="Contact Me"
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
            height: 400,
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
            color="White"
            marginBottom={30}
          > Contact Me</Typography>
          <div className="formSection">
            <TextField
              required
              id="outlined-required"
              label="Email"
            />
            <TextField
              required
              id="outlined-required"
              label="Name"
            />
            <TextField className="messageSection"
            required
              id="outlined-search"
              label="Message"
              type="Search field"
            />
          <Button className='cardBtns' id="btn" size="small">Send Email</Button>
          </div>
        </Box>
      </div>
      <script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<script type="text/javascript">
  emailjs.init('Zr22jefdTB8t3hG2u')
</script>
    </>
  );
}



export default SkillForm;
