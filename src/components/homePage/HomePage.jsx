import React from 'react'
import './homePage.css'
import Header from '../header/Header'

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
      
    </div>
    </>
  )
}

export default HomePage
