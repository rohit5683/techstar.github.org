import React from "react";
import vg from "../assets/vg.png";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="Home" id = "home">
        <main>
          <h1>Welcome to TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />
        <p>
          We are your one and only solution to the tech problems you face
          everyday. We are leading tech company whose aim is to increase the
          problem solving ability in children.
        </p>
      </div>
  

      <div className="home3" id="service">
        <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          necessitatibus tenetur quam adipisci recusandae eligendi deserunt ad
          perspiciatis nisi unde, tempora ipsam enim ducimus corporis laudantium
          dolore odit, blanditiis modi aperiam! Quam voluptates, aperiam dicta
          unde consequatur in. Eius quod officia illum necessitatibus sint, vero
          vel iure voluptate asperiores dignissimos?
        </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style = {{
              animationDeley:"0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style = {{
              animationDeley:"0.5s",
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style = {{
              animationDeley:"0.7s",
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style = {{
              animationDeley:"0.9s",
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
