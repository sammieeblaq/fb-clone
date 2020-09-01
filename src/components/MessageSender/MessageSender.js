import React from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

export default function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="message__sender">
      <div className="message__sender__top">
        <Avatar />
        <from>
          <input
            className="message__sender__input"
            placeholder="What's on your mind"
          />
          <input placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </from>
      </div>
      <div className="message__sender__bottom"></div>
    </div>
  );
}
