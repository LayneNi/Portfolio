


function Project({title, description, tools, link, repo,image}) {


  return (

    <>
<h1>{title}</h1>
<h1>{description}</h1>
<a href={link} target="_blank" rel="noreferrer" > Live Site</a>
<div style={{height: "100px", width: "150px", display: "flex", justifyContent: "center", alignItems: "center"}}>

<img style={{overflow: "hidden"}} src={image} alt="Me"/> 
</div>
    </>
  );
}

export default Project;
