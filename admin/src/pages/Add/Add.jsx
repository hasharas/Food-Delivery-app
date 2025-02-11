import React from 'react';
import './Add.css'
import { assets } from './../../assets/assets.js'

const Add = () => {
      return (
            <div className='add'>
                  <form className="flex-col">
                        <div className="add-image-upload flex col">
                              <p>Upload Image</p>
                              <label htmlFor="image">
                                    <img src={assets.upload_area} alt="upload area" />
                              </label>
                              <input type="file" id='image' hidden required className='' />
                        </div>
                        <div className="add-product-name flex col">
                              <p>Product Name</p>
                              <input type="text" name='name' placeholder='Type hare..' />
                        </div>
                        <div className="add-product-description flex-col">
                              <p>Description</p>
                              <textarea name="description" rows='6' placeholder='Write content hare..' required id=""></textarea>
                        </div>
                        <div className="add-category-price">
                              <div className="add-category flex-col">
                                    <p>Product Category</p>
                              </div>
                        </div>
                  </form>

            </div>
      );
}

export default Add;
