import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"]
 const linksList = links.map( (link,index) => {

  return <a href= {`#${link}`}  key= {index}>{link}</a>
  
  







 })
  


  
  return <nav>{/* display an <a> tag for each link here */}
{linksList}
</nav>;
 }

export default NavBar;
