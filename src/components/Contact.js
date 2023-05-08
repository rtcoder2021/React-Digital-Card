import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="header">Contact</h1>
      <Button icon={<FaEnvelope />} label="Email" primary />
      <Button icon={<FaGithub />} label="GitHub" />
    </div>
  );
};

export default Contact;
