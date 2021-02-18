import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import author from "../components/photo.jpeg"
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav style={{color:"#121212"}} className="navbar navbar-expand-lg navbar-light bg-dark" >
  
  <div className = "container">


    
  <div className= "container py">
 
            <div className="photo-wrap">
            <img className= "profile-img" src={ author} alt="Photo Of Me..."></img>
            </div>

    </div>
  <a className="navbar-brand" style={{color:'white', fontSize:"25px",marginTop:"18px", marginInlineEnd:"520px"}}>Taha Yasin Mimarlar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={{color: "white"}}></FontAwesomeIcon>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    
     </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="about" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item">
        <Link smooth={true} to="released games" className="nav-link" href="#">Released Games</Link>
      </li>


      <li className="nav-item">
        <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
      </li>
  

    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
