import React, { useState } from "react";
import SignForm from "../../components/Signup/SignForm";
import "../../components/Signup/styles.css";
import { AiOutlineClose } from "react-icons/ai";
import Login from "../../components/Signup/Login";
import { Link } from "wouter";

export default function Sign() {
  const [isSubmitted, setIsSubmitted] = useState(false); //Creamaos un estado para saber y modificar si está registrado un usuario y que por defecto estará en false

  function submitForm() {
    //Creamos una función que modificará el valor submited a true
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">
          <AiOutlineClose />
        </span>
        <div className="form-content-left">
          <iframe
            className="form-img"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EPQJHNXdJfM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {!isSubmitted ? <SignForm submitForm={submitForm} /> : <Login />}
      </div>
    </>
  );
}
