import Project from "./Project";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LayneLogo from '../../images/white_logo_transparent_background.png'
function ProjectContainer() {
 
    const projects = [
        {
            title: "Final Project",
            description: "Final ",
            tools: "HTML, CSS, JavaScript",
            link: "https://www.google.com",
            repo: "Www.github.com",
            image:require("../../images/white_logo_transparent_background.png")
        },
        {
          title: "Workout Tracker",
          description: "While this application proved to be very challenging, my group was incredible at communicating and staying consistent. We were so proud of the finished product.",
          tools: "add tools",
          link: "https://obscure-peak-77091.herokuapp.com/login",
          repo: "https://github.com/LayneNi/workout-tracker",
          image:require("../../images/Workout-Tracker-Screenshot.PNG")
      },
      {
        title: "Disney Character Locator",
        description: "This application was so fun to make! In a group of three people we were able to utilize a third party API for the first time and create this!",
        tools: "HTML, CSS, JavaScript",
        link: "https://layneni.github.io/disney-character-locator/",
        repo: "https://github.com/LayneNi/disney-character-locator",
        image:require("../../images/Disney-screenshot-3.PNG")
    },
    {
      title: "Project 3",
      description: "While this application proved to be very challenging, my group was incredible at communicating and staying consistent. We were so proud of the finished product.",
      tools: "add tools",
      link: "https://www.google.com",
      repo: "Www.github.com",
      image:require("../../images/white_logo_transparent_background.png")
  },
  {
    title: "Project 4",
    description: "While this application proved to be very challenging, my group was incredible at communicating and staying consistent. We were so proud of the finished product.",
    tools: "add tools",
    link: "https://www.google.com",
    repo: "Www.github.com",
    image:require("../../images/white_logo_transparent_background.png")
},
{
  title: "Project 5",
  description: "While this application proved to be very challenging, my group was incredible at communicating and staying consistent. We were so proud of the finished product.",
  tools: "add tools",
  link: "https://www.google.com",
  repo: "Www.github.com",
  image:require("../../images/white_logo_transparent_background.png")
},
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
        // height: 900,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 'fit-content',
        backgroundColor: '#2E3B55',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: '#2E3B55',
          fontSize:26,
          boxShadow: 5,
        },
        
      }}
    >
      {/* <div sx={{display:'inline-block'}}> */}
<Typography class= "neonText"
    color= "White"
    marginBottom={30}
    > 
    {/* <h1>This is my project section</h1> */}
</Typography>
{/* </div> */}
    {projects.map(project => <Project key={project.title} {...project} /> )}

    </Box>
    </>
  );
}

export default ProjectContainer;
