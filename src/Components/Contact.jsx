import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1>Book Your Table</h1>
        <form>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Type Your E-Mail' />
            <textarea placeholder='Write Here...' ></textarea> 
            <input className='submitbtn' type="submit" value="BOOK" />
        </form>
    </div>

  )
}

export default Contact;