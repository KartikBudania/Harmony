import React from "react";
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
  // console.log(album);

  const artists = [];

  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is a ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
