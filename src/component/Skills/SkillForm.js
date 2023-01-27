import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

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
          <Typography className="skillText" color="White" marginBottom={0}>
            <h3>NodeJS</h3>
            <h3>NodeJS</h3>
            <h3>NodeJS</h3>
            <h3>NodeJS</h3>
            <h3>NodeJS</h3>
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
          <Button className='cardBtns' size="small">Send Email</Button>
          </div>
        </Box>
      </div>
    </>
  );
}

export default SkillForm;
