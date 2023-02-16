import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Project({title, description, tools, link, repo,image}) {


  return (

    <>
    <Card id='Projects' className='cards' style={{ 
    maxWidth: 450,
    width: 350,
    minHeight: 600 ,
    // margin: 10,
    backgroundColor: '#13151a',
    color: 'white'
    
    // display: 'flex',
    // justifyContent: 'center'
  }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
          <Typography id="cardText">
           Tools Used: {tools}
           </Typography>
        </Typography>
      </CardContent>
      <CardActions className='cardBtnSection'
      sx={{justifyContent: 'center'}}
      >
        <Button className='cardBtns' size="small" href={link}>Live Website</Button>
        <Button className='cardBtns' size="small" href={repo}>Repository</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Project;


// {/* <h1>{title}</h1>
// <h1>{description}</h1>
// <a href={link} target="_blank" rel="noreferrer" > Live Site</a>
// <div style={{height: "100px", width: "150px", display: "flex", justifyContent: "center", alignItems: "center"}}>

// <img style={{overflow: "hidden"}} src={image} alt="Me"/> 
// </div> */}