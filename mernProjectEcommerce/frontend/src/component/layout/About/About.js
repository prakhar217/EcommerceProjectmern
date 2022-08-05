import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography>Prakhar Dabkara</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Prakhar Dabkara
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">About Us</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nulla?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit autem minima iusto animi illum nobis consectetur, voluptatum eos dolorem perferendis nihil explicabo cumque, et provident doloribus eveniet ratione ut quisquam.</p>
{/* 
            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
