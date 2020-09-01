import React from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}
