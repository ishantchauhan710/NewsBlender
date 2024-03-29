import React from 'react'
import DrawerComponent from './DrawerComponent.js'

const HeaderComponent = (props) => {
  return (
    <div className='header'>
        <div class="button-drawer-menu">
          <DrawerComponent setNewsCategory={props.setNewsCategory} />
          </div>
        <div class="logo"><i class='newspaper-icon far fa-newspaper'></i> News Blender</div>
        <div class="label-category">{props.category}</div>
    </div>
  )
}

export default HeaderComponent;