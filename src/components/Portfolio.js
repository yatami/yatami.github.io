import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlayCircle
  } from "@fortawesome/free-solid-svg-icons";

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import ReactPlayer from "react-player";
import "../components/responsive-player.css";
import image from "../images/image.PNG";
import image1 from "../images/image1.PNG";
import image2 from "../images/image2.PNG";
import image3 from "../images/image3.PNG";
import image5 from "../images/image5.PNG";
import image6 from "../images/image6.PNG";
import image7 from "../images/image7.PNG";
import image8 from "../images/image8.PNG";
import image9 from "../images/image9.PNG";
import image10 from "../images/image10.PNG";
import image11 from "../images/image11.PNG";
import image12 from "../images/image12.PNG";
import image13 from "../images/image13.PNG";

const Portfolio = () => {

const openPopupboxGame1= () =>{
    const content = (
        <> 

       <div className="popup" 
             >
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/OSfyGTVNV-I'
            width='100%'
            height='100%'
          />
        </div>
        
        <p></p>
       
        </div>
         
        </>
    )
   
    PopupboxManager.open({content})
}

const popupboxConfigGame1 = {


        
}

const openPopupboxGame2= () =>{
    const content = (
        <> 

       <div className="popup" >
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=yPj1Z235y6A'
            width='100%'
            height='100%'
          />
        </div>
        
       
        </div>
         
        </>
    )
   
    PopupboxManager.open({content})
}

const popupboxConfigGame2 = {

     
}
const openPopupboxGame3= () =>{
    const content = (
        <> 

       <div className="popup" >
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=WO9wc7raI08'
            width='100%'
            height='100%'
          />
        </div>
     
     <p>Got inspired by Dark Tranquillity latest release Phantom Days and created this environment in UE4.</p>
       
        </div>
         
        </>
    )
   
    PopupboxManager.open({content})
}

const popupboxConfigGame3 = {

      
     
}
const openPopupboxGame4= () =>{
    const content = (
        <> 

       <div className="popup" >
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=BDKim3JKjBk'
            width='100%'
            height='100%'
          />
        </div>
        
       
        </div>
         
        </>
    )
   
    PopupboxManager.open({content})
}

const popupboxConfigGame4 = {


}

const openPopupboxGame5= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=YwBcdeVXXLI'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>In this game, you switch cars and try not to crash. It is just like in Cluster Truck. I have created the roads with Spline and created a car AI to follow the road on different lanes. Also, I have added a chaos system that makes random cars switch to random lanes to create more crashes.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame5 = {

     
  
}

const openPopupboxGame6= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=EL-oczkMqZo'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>The basis of an inventory system for my project. Categories and slots per category are adjustable. Includes a 3D Item display and a character display. Also, provides different behaviors for different categories(Some can be used, equipped or stacked). Items can be dropped anywhere in a circle which center is the character.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame6 = {

    
  
}

const openPopupboxGame7= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=NGEXRCasHFc'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>In this game, you try to stay alive by staying in the road by drifting at the turns. I have created a procedural road generation system that can go endless. Also, the car moves automatically it handles after the turns and corrects the small mistakes player made.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame7 = {

         
}

const openPopupboxGame8= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=rWOS6rzRvTo'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>I have made this basic earthquake game by using paint in 3D and Rayfire packages in Unity. Basically, you draw the ground and buildings you want to hit with the earthquake and watch the show. I used two layers of destructible planes on top of each other. One of them is very fragile and the other one is more resistant to damage so it gives the effect of collapsing slowly.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame8 = {

  
}


const openPopupboxGame9= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=MrPyq0YKplI'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>This is basically like fall guys. but you are playing against AI. The AI is very basic it uses navmesh and tries to avoid dynamic obstacles. It uses the same inputs as the player.  Ragdoll physics gets activated when they are hit by some obstacles.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame9 = {
  
}

const openPopupboxGame10= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=mPLRLX1QPJU'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>This is a basic puzzle in which you try to fill the gaps by placing and enlarging different pieces. The most exciting thing in this project is Jelly physics! I have created a system that when you click to a Jelly, I get the closest vertex and add a force to that vertex and neighbor vertexes. The force decreases over distance from the vertex and over time so it gives the Jelly effect. The force also applies randomly and when jelly hit other objects.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame10 = {

     
}

const openPopupboxGame11= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=k2xjNERZe2I'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>In this game, you can manipulate pipes however you want by clicking and dragging. Your aim is to place thorus to the stands without tangling them. I used spline for pipes. I have created 10 nodes and get the closest one on mouse click. Then, change the position of it and its neighbors with mouse input. I have used physics for thorus movement on pipes.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame11 = {

      
}

const openPopupboxGame12= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=qei6sd_8-kY'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>This is a game where you try to draw patterns in a zen garden. To make the dig effect I send many raycasts from every point of the hoe. The raycasts are in a circular shape. I get the closest vertex for every raycast and change its position according to its distance from point of the hoe. To eliminate the missed vertexes while dragging fast, I have created a system that would get current and previous positions and raycast between them with a certain frequency.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame12 = {

       
}

const openPopupboxGame13= () =>{
  const content = (
      <> 

     <div className="popup" >
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=rjc9uoJCqKs'
          width='100%'
          height='100%'
        />
      </div>
      
     <p>Animations in the project are from animation packs from UE4's market. All the animations and character movement except jogging and sprinting while the sword is sheathed are implemented/created by me. It's not a part of a tutorial or a copy of another project.</p>
      </div>
       
      </>
  )
 
  PopupboxManager.open({content})
}

const popupboxConfigGame13 = {

      
}
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center" style = {{color:"#f9ab00"}}>Portfolio</h1>
                <h2 className="text-center py-5" style={{color:"#ffff", textDecorationLine: 'underline', textDecorationStyle: 'solid'} }>Systems-Mechanics</h2>
                <div className="image-box-wrapper row justify-content-center">

                   
                    <div className="portfolio-image-box" onClick={openPopupboxGame5} >
                    <img className="portfolio-image" src={image5} alt="image5"></img>      
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Cluster Truck But Inside The Car</p>
                    </div>


                    <div className="portfolio-image-box" onClick={openPopupboxGame6}>
                    <img className="portfolio-image" src={image6} alt="image6"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Slot-based Weighted Inventory System</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame7}>
                    <img className="portfolio-image" src={image7} alt="image7"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Drift Game</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame8}>
                    <img className="portfolio-image" src={image8} alt="image8"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Earthquake System With Rayfire In Unity</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame9}>
                    <img className="portfolio-image" src={image9} alt="image9"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Mobile Fall Guys Clone</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame10}>
                    <img className="portfolio-image" src={image10} alt="image10"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Jelly Puzzle</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame11}>
                    <img className="portfolio-image" src={image11} alt="image11"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Tangle Thorus</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame12}>
                    <img className="portfolio-image" src={image12} alt="image12"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Zen Garden</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame13}>
                    <img className="portfolio-image" src={image13} alt="image13"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Open World Medieval Character on UE4</p>
                    </div>
                    
                    
               

                

                    </div>

                    <h2 className="text-center py-5" style={{color:"#ffff", textDecorationLine: 'underline', textDecorationStyle: 'solid'} }>Materials-VFX</h2>
                <div className="image-box-wrapper row justify-content-center">

                   
                    <div className="portfolio-image-box" onClick={openPopupboxGame1}>
                    <img className="portfolio-image" src={image} alt="image"></img>      
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Lake of Blood</p>
                    </div>
                


                    <div className="portfolio-image-box" onClick={openPopupboxGame2}>
                    <img className="portfolio-image" src={image1} alt="image1"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Lava Lake</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame3}>
                    <img className="portfolio-image" src={image2} alt="image2"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Phantom Days UE4 Cinematic</p>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame4}>
                    <img className="portfolio-image" src={image3} alt="image3"></img>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    <p style={{color:"white", textAlign: "center", marginTop:5, fontSize:13 }}>Shield Area</p>
                    </div>
                    
                

                    </div>
            </div>

        <PopupboxContainer {...popupboxConfigGame1} />
        <PopupboxContainer {...popupboxConfigGame2} />
        <PopupboxContainer {...popupboxConfigGame3} />
        <PopupboxContainer {...popupboxConfigGame4} />
        <PopupboxContainer {...popupboxConfigGame5} />
        <PopupboxContainer {...popupboxConfigGame6} />
        <PopupboxContainer {...popupboxConfigGame7} />
        <PopupboxContainer {...popupboxConfigGame8} />
        <PopupboxContainer {...popupboxConfigGame9} />
        <PopupboxContainer {...popupboxConfigGame10} />
        <PopupboxContainer {...popupboxConfigGame11} />
        <PopupboxContainer {...popupboxConfigGame12} />
        <PopupboxContainer {...popupboxConfigGame13} />


        </div>
    )
}

export default Portfolio

