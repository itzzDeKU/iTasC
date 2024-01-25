// About.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <h1>About Us</h1>
      <p>This is the content of the About Us page.</p>
      <p>Using context value: </p>
    </>
  );
};

export default About;
