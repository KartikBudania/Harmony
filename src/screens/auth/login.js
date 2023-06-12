import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
      <div className="note">
      <p>This project relies on the Spotify API to function properly. It's important to note that Spotify only provides a maximum of 30 seconds of content through their API. This means that any audio or music you encounter on the website will be limited to a 30-second preview. If you wish to access the full content, you may need to consider using the official Spotify application or website directly.</p>
      <p>It's important to note that Spotify does not always provide an audio source for every song in their vast catalog.Therefore, certain tracks are unavailable for playback due to restrictions imposed by Spotify or the artists themselves. Unfortunately, this is beyond our control as it is determined by the rights holders.</p>
      </div>
    </div>
  );
}
