import React from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        username="sammiee"
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/e5c1a384-6ca5-4785-9dd8-23eb0f4b1f7a/bvlatuR/std/2880x2400/Desktop-ModelX"
        timestamp="timestamp"
        message="Wow this works"
        profilePic="https://cdn.vox-cdn.com/thumbor/qVjMPtyFVT5Dtwl_jSOCj4Y33TM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15980837/elon_musk_tesla_3036.jpg"
      />
      <Post
        username="sammiee"
        timestamp="timestamp"
        message="Wow this works"
        profilePic="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2020%2F7%2F25%2F21338456%2Ftesla-elon-musk-twitter-memes-spacex&psig=AOvVaw3RkxNok3UgsGopq0YqwWbX&ust=1599082624775000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDskpH1yOsCFQAAAAAdAAAAABAU"
      />
    </div>
  );
}
