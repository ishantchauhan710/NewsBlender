import React from 'react'
import DrawerComponent from './DrawerComponent.js'

const HeaderComponent = (props) => {
  return (
    <div className='header'>
        <div class="button-drawer-menu">
          <DrawerComponent setNewsCategory={props.setNewsCategory} />
          </div>
        <div class="logo">News Blender</div>
    </div>
  )
}

export default HeaderComponent;