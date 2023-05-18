import React, { useEffect, useRef, useState } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
import Controls from "./controls";
import WaveAnimation from "./waveAnimation";

export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {

  const [isPlaying, setIsPlaying] = useState(true)
  const [trackProgress, setTrackProgress] = useState(0)
  var audioSrc = total[currentIndex]?.track.preview_url

  const audioRef = useRef(new Audio(total[0]?.track.preview_url))

  const intervalRef = useRef()

  const isReady = useRef(false)

  const {duration} = audioRef.current

  const currentPercentage = duration ? (trackProgress/duration)*100 : 0

  const startTimer = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if(audioRef.current.ended){
        handleNext()
      }else{
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000]);
  }

  useEffect(() => {
    if(isPlaying && audioRef.current){
      audioRef.current = new Audio(audioSrc)
      audioRef.current.play()
      startTimer()
    }else{
      clearInterval(intervalRef.current)
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(audioSrc)

    setTrackProgress(audioRef.current.currentTime)

    if(isReady.current){
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    }else{
      isReady.current = true;
    }
  }, [currentIndex])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  const handleNext = () => {
    if(currentIndex < total.length - 1){
      setCurrentIndex(currentIndex + 1)
    }else setCurrentIndex(0)
  }

  const handlePrev = () => {
    if(currentIndex - 1 < 0){
      setCurrentIndex(total.length - 1)
    }else setCurrentIndex(currentIndex - 1)
  }

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{(Math.round(trackProgress))<10 ? `0${Math.round(trackProgress)}` : `${Math.round(trackProgress)}`}</p>
            <WaveAnimation isPlaying={true} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
