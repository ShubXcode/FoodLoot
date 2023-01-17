import React from 'react'
import aboutimage from '../images/upcoming-img.jpg';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam aliquid recusandae deleniti molestiae. Iure delectus ad ratione pariatur error possimus numquam libero odit dignissimos.</p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage}/>
        </div>

    </div>
  )
}

export default About;