import React from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

export default function Feed({ profilePic, image, username, timestamp }) {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
