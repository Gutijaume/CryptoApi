import React from 'react'
import "../About-elements/styles.css";
import {
  FaGithub,
  FaFacebook,
 
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";


const githubLink = "https://github.com/Gutijaume";
const facebookLink = "https://www.facebook.com/jaume.solepurcalla";
const igLink = "https://www.instagram.com/jaume_sole1";

export default function Rrss() {
  return (
    <div className="about-rrss">
    <IconContext.Provider value={{ size: "3em" }}>
      <a href={githubLink}>
        <FaGithub />
      </a>
      <a href={facebookLink}>
        <FaFacebook />
      </a>          
      <a href={igLink}>
        <FaInstagram />
      </a>
    </IconContext.Provider>
  </div>
  )
}