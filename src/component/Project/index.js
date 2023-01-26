import Project from "./Project";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
function ProjectContainer() {
 
    const projects = [
        {
            title: "proj1",
            description: "We did this",
            tools: "CSS, React",
            link: "https://www.google.com",
            repo: "Www.github.com",
            image:require("../../images/white_logo_transparent_background.png")
        }
    ]

  return (

    <>   <Box 
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '100',
        marginTop: 1,
        marginLeft: 5,
        marginRight: 5,
        height: 500,
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
    > <h1>This is my project section</h1>
</Typography>
    {projects.map(project => <Project key={project.title} {...project} /> )}

    </Box>
    </>
  );
}

export default ProjectContainer;
