import React, { useEffect } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify'

export default function Player() {
  const location = useLocation()

  useEffect(() =>{
    apiClient.get(`playlists/${location.state?.id}/tracks`)
    .then(res => console.log(res.data))
  }, [location.state])

  return (
    <div className='screen-container'>
      <div className='left-player-body'></div>
      <div className='right-player-body'></div>
    </div>
  )
}
