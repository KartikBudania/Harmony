import React from 'react'
import './sidebar.css'
import profile from './profileimage.jpg'
import SidebarButton from './sidebarButton'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src={profile} className='profile-img' alt='profile picture' />
      <div>
        <SidebarButton  />
        <SidebarButton  />
        <SidebarButton  />
        <SidebarButton  />
        <SidebarButton  />
      </div>
        <SidebarButton  />
    </div>
  )
}
