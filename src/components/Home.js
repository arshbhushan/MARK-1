import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/backGround.jpg'

const Home = () => {

      return (
        <div className='home-container'>
          <Navbar />
          <div className='home-banner-container'>
            <img src={BannerBackground} alt='' />
            <div className='home-text-section'>
              <h2 className='primary-heading'>
                Charging Today,
                Lighting Tomorrow.
              </h2>
            </div>

          </div>
          
        </div>
      );
    };

export default Home