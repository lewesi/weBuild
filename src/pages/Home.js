import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <>
      <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner.jpg" alt="main-bunner" className='image-fluid rounded-3' />
              <div className="main-banner-content position-absolute">
                <h2>Offer! Offer! Offer!</h2>
                <h4>Mombasa Cement</h4>
                <p>10 bags of cement at a crazily discounted price</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner gap-10 position-relative">
              <img src="images/main-banner.jpg" alt="main-bunner" className='image-fluid rounded-3' />
              <div className="small-banner-content position-absolute">
                <h2>Offer! Offer! Offer!</h2>
                <h4>Mombasa Cement</h4>
                <p>10 bags of cement at a crazily discounted price</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src="images/main-banner.jpg" alt="main-bunner" className='image-fluid rounded-3' />
              <div className="small-banner-content position-absolute">
                <h2>Offer! Offer! Offer!</h2>
                <h4>Mombasa Cement</h4>
                <p>10 bags of cement at a crazily discounted price</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src="images/main-banner.jpg" alt="main-bunner" className='image-fluid rounded-3' />
              <div className="small-banner-content position-absolute">
                <h2>Offer! Offer! Offer!</h2>
                <h4>Mombasa Cement</h4>
                <p>10 bags of cement at a crazily discounted price</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src="images/main-banner.jpg" alt="main-bunner" className='image-fluid rounded-3' />
              <div className="small-banner-content position-absolute">
                <h2>Offer! Offer! Offer!</h2>
                <h4>Mombasa Cement</h4>
                <p>10 bags of cement at a crazily discounted price</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row"><div className="col-12">
          <div className="services d-flex align-items-center justify-content-between"></div></div></div>
      </div>
    </section>
  </>
  )
}

export default Home