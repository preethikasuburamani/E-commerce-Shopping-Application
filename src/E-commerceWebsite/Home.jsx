import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>

    <div className='banner-container'>
      <div className='content'>
        <h1 className='name'>Fashion Garments</h1>
        <p className='tagline'>“Where style meets comfort ,crafted for every occasion.
          <p>Fashion that defines you, beyond trends</p></p>
        <button>start our fashion here</button>
      </div>
    </div>

    <div className='history-container'>
      <div className='history'>
        <p>Indian garments reflect the country’s rich culture, tradition, and regional diversity.</p>
        <p>Fabrics include cotton, silk, wool, often adorned with handwoven designs and embroidery.</p>
        <p>Clothing symbolizes festivals, religion, and social status, with vibrant colors and patterns.</p>
      </div>

      <div className='history-tagline' >
          <h1>"Where Tradition Meets Trend."</h1>
      </div>
    </div>
    </>
  )
}

export default Home