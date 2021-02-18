import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faInstagram,
    faLinkedin,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                       
                            <p>Taha Yasin Mimarlar</p>
                            <br></br>
                        </div>
                        <div className="d-flex">
                            <p>tahamimarlar@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+905350195985">+9(535)0195985</a> 
                            <br></br> 
                        </div>
                        <div className="d-flex">
                        <p>Istanbul, Turkey</p>
                            
                        </div>
                        
                    </div>
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
            
        </div>
    )
}

export default Footer
