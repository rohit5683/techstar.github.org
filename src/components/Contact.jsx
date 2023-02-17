import React from 'react'

function Contact() {
  return (
    <div className='contact'>

      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>

          <label htmlFor="">Name</label>
          <input type="text" name="" id="" placeholder='Enter your name'/>
          </div>

          <div>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder='Enter your Email'/>
          </div>

          <div>
          <label htmlFor="">Message</label>
          <input type="text" name="" id="" required placeholder='Tell us about your Query'/>
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>

    
  )
}

export default Contact