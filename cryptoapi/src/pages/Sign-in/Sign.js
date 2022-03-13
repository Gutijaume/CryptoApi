import React, { useState } from "react";
import FormSuccess from "../../components/Signup/FormSuccess";
import SignForm from "../../components/Signup/SignForm";
import "../../components/Signup/styles.css";
import {AiOutlineClose} from 'react-icons/ai'

export default function Sign() {
  const [isSubmitted] = useState(false);

  function submitForm() {
    isSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"><AiOutlineClose/></span>
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
        {!isSubmitted ? <SignForm submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
}
