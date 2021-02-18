import React from 'react'
import game1 from "../components/game1.PNG"
import game2 from "../components/game2.PNG"
import game3 from "../components/game3.PNG"
import game4 from "../components/game4.PNG"
import game5 from "../components/game5.PNG"



const ReleasedGames = () => {
    let url1="https://apps.apple.com/us/app/build-robots/id1537809219";
    let url2="https://apps.apple.com/us/app/chaos-run/id1550285179";
    let url3="https://apps.apple.com/us/app/shoe-shoot/id1530921573";
    let url4="https://play.google.com/store/apps/details?id=com.YesPact.MilkyRide&hl=en_US&gl=US";
    let url5="https://store.steampowered.com/app/1280630/Waifu_Breaker/";

    return (
        <div id="released games" className="releases">
            <h1 className="py-5">Released Games</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className= "container py" >
                                <div className="photo-wrap">
                                <img className= "profile-img" style={{marginTop:"2rem"}} src={ game1} alt="game1..."></img>
                                </div>
                                </div>
                                <h3>Build Robot‪s</h3>
                                <p>This is a project I have created while working in Reboot Interactive. In this game you build robots and test them. I was responsible with the kitchen mechanic in which you test foods made by robots. In this mechanic robots wait in a line and you evaluate them one by one according to their food in their hand by sliding the lever left or right. I made some of the robot animations. Also, in the shooting mechanic, where you shoot and destroy robots, I have made the environment destructible with the gun. I used Rayfire for this purpose. </p>
                                <a href={url1}>Link to Store Page</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className= "container py">
                                <div className="photo-wrap">
                                <img className= "profile-img" style={{marginTop:"2rem"}} src={ game2} alt="game2..."></img>
                                </div>
                                </div>
                                <h3>Chaos Run</h3>
                                <p>This is a project I have created while working in Reboot Interactive. In Chaos Run, you try to quickly change your character to stay alive. Again, in this project I was responsible with everything related to programming. Including ragdoll system on hit and physics obstacle movements.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href={url2}>Link to Store Page</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className= "container py">
                                <div className="photo-wrap">
                                <img className= "profile-img" style={{marginTop:"2rem"}} src={ game3} alt="game3..."></img>
                                </div>
                                </div>
                                <h3>Shoe Shoot</h3>
                                <p>This is a project I have created while working in Reboot Interactive. This is a game where you try to reach the goal by kicking the ball through various platforms. I have developed everything that can be programmed including projectile projection, dynamic camera and aim helping system while shooting to goal directly.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                
                                <a href={url3}>Link to Store Page</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className= "container py">
                                <div className="photo-wrap">
                                <img className= "profile-img" style={{marginTop:"2rem"}} src={ game4} alt="game4..."></img>
                                </div>
                                </div>
                                <h3>Milky Ride</h3>
                                <p>This is a project I have created while working in Nopact. This was my first project in unity.  I have developed everything gameplay related in this project including animation trees, camera work, sounds, level system and main gameplay elements.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href={url4}>Link to Store Page</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className= "container py">
                                <div className="photo-wrap">
                                <img className= "profile-img" style={{marginTop:"2rem"}} src={ game5} alt="game5..."></img>
                                </div>
                                </div>
                                <h3>Waifu Breaker</h3>
                                <p>This is a project I made completely myself. I wanted to create a game from scratch and put it on the Steam store and since my budget was low I have decided to make a game from hentai genre. Only the drawings, vocalization and music are made by freelancers; the other parts are developed by me. This game was created with a budget of 300$ and sold around 1000 copies.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href={url5}>Link to Store Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default ReleasedGames
