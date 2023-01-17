import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/product1.jpg';
import pimage2 from '../images/product2.jpg';
import pimage3 from '../images/product3.jpg';

const Products = () => {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci enim reprehenderit ratione voluptas rerum esse!
        </p>
        <div className='a-container'>
            <Productbox image={pimage1} title="Masala Dosa" />
            <Productbox image={pimage2} title="Khaman Dhokla" />
            <Productbox image={pimage3} title="Pao Bhaji" />
        </div>
    </div>
  )
}

export default Products;
