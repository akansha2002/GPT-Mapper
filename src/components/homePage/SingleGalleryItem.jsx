import React from 'react'
import './singleGalleryItem.css'
import Tree from '../../assets/tree.jpg'
import IMG2 from '../../assets/2.jpg'

const SingleGalleryItem = () => {
  return (
    <div className='single-item'>
      <div className='single-item-inner'>
        <img src={Tree} alt='tree'/>
        {/* <div class="hover-content">
            <a href="img/bg-img/3.jpg" class="portfolio-img">+</a>
        </div> */}
      </div>
    </div>
  )
}

export default SingleGalleryItem
