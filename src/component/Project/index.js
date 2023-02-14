import Project from "./Project";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LayneLogo from '../../images/white_logo_transparent_background.png'
function ProjectContainer() {
 
    const projects = [
        {
            title: "My Friendly Monster",
            description: "A fun app designed for collecting digital novelty characters. My Friendly Monster is a full-stack react app that utilizes MongoDB. The 90's style theme and layout was accomplished using bootstrap to assist with CSS styling.",
            tools: "HTML, CSS, JavaScript, React, Bootstrap, MongoDB",
            link: "https://vast-inlet-40115.herokuapp.com/",
            repo: "https://github.com/LayneNi/my-friendly-monster",
            image:require("../../images/monster-dashboard-snippet.PNG")
        },
        {
          title: "Workout Tracker",
          description: "While this application proved to be very challenging, my group was incredible at communicating and staying consistent. We were so proud of the finished product.",
          tools: "HTML, CSS, JavaScript, Bootstrap, MySql",
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
      title: "Weather Api",
      description: "Creating this application was very challenging when I first started it. Despite having learned a lot since its creation that would streamlined the development process quite a bit, I am still very impressed by what i was able to create with the knowledge i had at the time. ",
      tools: "HTML, CSS, JavaScript",
      link: "https://layneni.github.io/Weather-API-Challenge/",
      repo: "https://github.com/LayneNi/Weather-API-Challenge",
      image:require("../../images/Weather-Dashboard-Screenshot.PNG")
  },
  {
    title: "Team Profile Generator",
    description: "I created this project while first learning NodeJs and i had a blast creating it. The process of creating a web page dynamically based on data inputed in the form of answers to specific questions was very interesting. This application helped me understand how limitless the potential of web design is. This is a backend web app and therefore has a video walkthrough link instead of a live deployment.",
    tools: "HTML, CSS, JavaScript, NodeJs",
    link: "https://drive.google.com/file/d/1Rj59TGVcLgemtH40CkBHlVdJ5C8-xO8k/view",
    repo: "https://github.com/LayneNi/Team-Profile-Generator",
    image:require("../../images/Team-profile-builder-screenshot.PNG")
},
{
  title: "Pokemon Quiz",
  description: "This was my first gamified web application that I ever created. This project seems so simple looking back on it but I still feel it is worth showing what I was able to create at the time. There are several moving parts to this app and they worked together seemlessly. This always was my first time implicating local storage to an app and it was very fun to be able to save players high scores. The processes used to create this app have proven to be very useful in applications I have created since then. ",
  tools: "HTML, CSS, JavaScript",
  link: "https://layneni.github.io/quiz-challenge/",
  repo: "https://github.com/LayneNi/quiz-challenge",
  image:require("../../images/Pokemon-Quiz-Screenshot.png")
},
    ]

  return (

    <>   <Box className="projectBox"
    border={1} borderColor="white" borderRadius="10px"
    display="flex" justifyContent="center" alignItems="center"
    fontSize={24}
      sx={{
        width: '100',
        marginTop: 1,
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
    > 
    {/* <h1>Projects</h1> */}
</Typography>
{/* </div> */}
    {projects.map(project => <Project key={project.title} {...project} /> )}

    </Box>
    </>
  );
}

export default ProjectContainer;
