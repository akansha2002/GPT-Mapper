import React from 'react'
import '../../App.css';
import Poster from '../../img/bg-img/17.jpg'
import './passion.css'

const Passion = () => {
  return (
    <div>
      <section >
      {/* <div>
              <h3 className='about'>About Us</h3>
              </div> */}
            <div  className='section-2'>
              
                
                
                <div className='left-side'>
                    <h1>We Live For Passion</h1>
                    <div className='line'>
                        
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                    <button>Contact Us</button>
                </div>
                <div className='right-side'>
                    <img src={Poster} alt="Image Description" />
                </div>
            </div>

        </section>
    </div>
  )
}

export default Passion
