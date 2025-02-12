import React from 'react';
import './Add.css'
import { assets } from './../../assets/assets.js'

const Add = () => {
      return (
            <div className='add'>
                  <form className="flex-col">
                        <div className="add-image-upload flex-col">
                              <p>Upload Image</p>
                              <label htmlFor="image">
                                    <img src={assets.upload_area} alt="upload area" />
                              </label>
                              <input type="file" id='image' hidden required className='' />
                        </div>
                        <div className="add-product-name flex-col">
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
                                    <select name="category" id="">
                                          <option value="Saled">Saled</option>
                                          <option value="Roles">Roles</option>
                                          <option value="Desert">Desert</option>
                                          <option value="Sandwich">Sandwich</option>
                                          <option value="Cake">Cake</option>
                                          <option value="Pure veg">Pure veg</option>
                                          <option value="Pasta">Pasta</option>
                                          <option value="Noodles">Noodles</option>
                                    </select>
                              </div>
                              <div className="add-price flex-col">
                                    <p>Product Price</p>
                                    <input type="number" placeholder='$20' name='price' />
                              </div>

                        </div>
                        <button type='submit' className='add-btn' >ADD</button>
                  </form>

            </div>
      );
}

export default Add;
