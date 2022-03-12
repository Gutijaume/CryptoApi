import React from "react";
import '../About/styles.css'



const profile = 'https://media-exp1.licdn.com/dms/image/C5603AQEut9HB8zNQQg/profile-displayphoto-shrink_800_800/0/1644437595034?e=1652313600&v=beta&t=Sj5mxTLhhpJkj4uVvRVb94R4wKEg_wdU3L9fD1ixUx4'

export default function About() {
  return (
    <section className="about-app">
      <div className="about-img"></div>
        <img className="profile-img" src={profile} alt="profile"/>
      <div className="about-info-container">
        <h1>Jaume Solé Purcalla</h1>
        <p>amamamamama</p>
      </div>
      <div className="about-rrss"></div>
    </section>
  );
}
