import React from 'react'
import './queue.css'

export default function Queue({tracks, setCurrentIndex}) {

  // console.log(tracks);
  return (
    <div className='queue-container flex'>
      <div className='queue flex'>
        <p className='upNext'>Up Next</p>
        <div className='queue-list'>
          {
            tracks?.map((track, index) => (
              <div 
                key={index}
                className='queue-item flex'
                onClick={() => setCurrentIndex(index)}
              >
                <p className='track-name'>{track?.track?.name}</p>
                <p className='track-duration'>{Math.floor((track?.track?.duration_ms)/1000/60)}:{(Math.floor(((track?.track?.duration_ms)/1000)%60)) < 10 ? `0${(Math.floor(((track?.track?.duration_ms)/1000)%60))}`: `${(Math.floor(((track?.track?.duration_ms)/1000)%60))}`}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
