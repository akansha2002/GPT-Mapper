import React from 'react'
import './homePage.css'
import Header from '../header/Header'
import SingleGalleryItem from './SingleGalleryItem'
import Footer from '../footer/Footer'
import '../passion/passion.css'

const HomePage = () => {
  return (
    <>
    <Header/>
    <div className='home-area'>
    <div className='big-container'>
        <div className='middle-container'>
            <div className='small-container'>
                <h2>Hello, <br/> Need Guidance?</h2>
                <p>You reached the right place. We provide instant roadmaps essential to ace your career.</p>
                <div btn-container >
                <input className='btn-1' placeholder="Enter Topic"/>
                <a href='#' className='btn-2' >Get</a>
              </div>
          </div>
        </div>
      </div>
      <div className='roadmap_samples_container'>
          <div className='left-side'>
            <h3>Roadmap Samples</h3>
          </div>
          <div className='roadmap_samples_block'>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
            <SingleGalleryItem/>
          </div>
          <div className='view_more'>
            <div className='view-more-inner'>
              <a href='#' className='btna'>View More</a>
            </div>
          </div>

      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default HomePage
