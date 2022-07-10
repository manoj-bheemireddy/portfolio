import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
// import img1 from "../assets/img1.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Manoj Kumar</h2>


        <div className="prompt">
        {/* <img src={img1.jpg} className="img1" /> */}
        <img
        src="https://avatars.githubusercontent.com/u/88203786?s=400&u=443a1511d28569912e1defdfb53d094290d5e09f&v=4"
        alt="profile-photo" className="img1"/>
          <p className="p1">Being in the field of web development and looking forward to this major IT field. I had the great fortune
of working on some truly inspiring projects while networking with many influential and creative
individuals along the way.</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>

    
  );
}

export default Home;
