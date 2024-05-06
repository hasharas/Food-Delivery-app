import React from 'react';
import './AppDawnload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
            <p>To Better Experience Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                  <img src={assets.play_store} alt="" />
                  <img src={assets.app_store} alt="" />
            </div>

    </div>
  );
}

export default AppDownload;
