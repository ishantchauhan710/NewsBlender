import React from 'react'
import DrawerComponent from './DrawerComponent.js'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <div class="button-drawer-menu"><DrawerComponent /></div>
        <div class="logo">News Blender</div>
    </div>
  )
}

export default HeaderComponent;