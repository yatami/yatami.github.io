import React from "react";
import video from "./video/video.mp4";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faInstagram,
    faLinkedin,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";



const Header = () => {
    return (
      
      <div id="about" className="header-wrapper">
          <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left:"50%",
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform: "translate(-50%, -50%)",
            zIndex:"-1"
          }
          }
          >
              <source src={video} type="video/mp4"></source>
          </video>
          
          <div className="main-info">
              <h1>a game developer specialized in</h1>
              <Typed
              className="typed-text"
              strings={["Gameplay programming","Unreal Engine-4","Blueprints", "Unity", "Game AI" ,"Animation Programming", "Shader Programming", "Mesh Manipulation","C++", "C#"]}
              typeSpeed={40}
              backSpeed={60}
              loop

              />
 <div class="social-container">
      <a href="https://www.youtube.com/channel/UCYSswzmTcOMhUdsl6-Gs6QQ"
    className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://github.com/yatami/"
        className="github social">
    <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

<a href="https://www.instagram.com/tahamimarlar/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://www.linkedin.com/in/taha-yasin-mimarlar-7591a5159/" className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="mailto:taha.mimarlar@gmail.com?" className="gmail social">
  <FontAwesomeIcon icon={faGoogle} size="2x"  />
</a>
</div>


          </div>

      </div>
    )
}

export default Header;
