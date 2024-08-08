import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu'> 
            Choose from a variety of meet , freshly flown from Australia straight to your table Daily!
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt='' />
                    <p>{item.menu_name}</p>
                </div>
                )

            })}

        </div>
        
        
        </p>
      
    </div>
  )
}

export default ExploreMenu
