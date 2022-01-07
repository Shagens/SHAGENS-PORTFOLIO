import React from "react"
import profile from "../assets/images/Shikelia.jpeg"

// import myImage from 'my-app\src\assets\images\Shikelia.jpeg'

function aboutme () {
    return( 
        <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <img src={profile} className="profile"/>
            <h2>Hello, I'm Shikelia!</h2>
            <p>I am newly Full Stack Developer.</p>
            <div className="row">
                  
               </div>
            </div>
         </div>
      

   </section>
  );
}

export default aboutme;