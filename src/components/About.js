// About.js
import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const context = useContext(noteContext);
  return (
    <>
      <h1>About Us</h1>
      <p>This is the content of the About Us page.</p>
      <p>Using context value: {context.name}</p>
    </>
  );
};

export default About;
