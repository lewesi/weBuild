import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping</p>
            </div>
            <div className='col-6'>
              <p className=' text-end text-white mb-0'>Hotline: <a href='tel:+254 742345931' className='text-white'>+254 742345931</a> </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className='align-items-center row'>
            <div className="col-2">
              <h2><Link className='text-white'>weBuild</Link></h2>
            </div>
                <div className="col-5">
                  <div className="input-group">
                    <input type="text" className="form-control py-2" placeholder="Search for Product Here..." aria-label="Search for Product Here..." aria-describedby="basic-addon2"/>
                    <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
                  </div>
                </div>
              <div className="col-5">
                <div className="header-upper-links d-flex align-items-center justify-content-between">
                  <div>
                    <Link>
                    <img src="images/acc.jpg" alt="" />
                    <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link>
                    <img src="" alt="" />
                    <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link>
                    <img src="" alt="" />
                    <p></p>
                    </Link>
                  </div>
                  <div>
                    <Link>
                    <img src="" alt="" />
                    <p></p>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </header>    
    </>
  )
}

export default Header