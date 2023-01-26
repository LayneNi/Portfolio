import Card from 'react-bootstrap/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ProjectContainer from './Project/index';
// import bodyImage from '../images/marek-piwnicki-RsfF900AX2A-unsplash.jpg'
function MainCard() {


    return (
      <>
    <Box 
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '100',
        marginTop: 1,
        marginLeft: 5,
        marginRight: 5,
        height: 300,
        backgroundColor: '#2E3B55',
        '&:hover': {
          backgroundColor: '#2E3B55',
          fontSize:26,
          boxShadow: 5,
        },
        
      }}
    >
<Typography class= "neonText"
    color= "White"
    marginBottom={30}
    > <h1>My name is Layne Nigro and I am a highly motivated fullstack web developer. I have a passion for functional design and I love working with computers.</h1>
</Typography>
    </Box>

    <ProjectContainer/>
 
    <div id="Skills" class= "skillForm">
    <Box 
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '50%',
        marginTop: 1,
        marginLeft: 5,
        marginRight: .5,
        height: 400,
        backgroundColor: '#2E3B55',
        '&:hover': {
          backgroundColor: '#2E3B55',
          fontSize:26,
          boxShadow: 5,
        },
        
      }}
    >
<Typography class= "neonText"
    color= "White"
    marginBottom={30}
    > <h1>This is my skills section</h1>
</Typography>
    </Box>
    <Box id="Contact Me" 
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '50%',
        marginTop: 1,
        marginLeft: .5,
        marginRight: 5,
        height: 400,
        backgroundColor: '#2E3B55',
        float:'right',
        displayFlex: 'inline',
        '&:hover': {
          backgroundColor: '#2E3B55',
          fontSize:26,
          boxShadow: 5,
        },
        
      }}
    >
<Typography class= "neonText"
    color= "White"
    marginBottom={30}
    > <h1>This is my form section</h1>
</Typography>
    </Box>
    </div>
      </>
    );
  }
  
  export default MainCard;
  