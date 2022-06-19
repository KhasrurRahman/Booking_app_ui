import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/879406.webp?k=dd541d1e78f3b12096d858880a21807954f88849a62946cca580a95ae81c99fb&o=" alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Dhaka</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/693535.webp?k=39f09e1a64b76dc38b82fae5e51dd9728a68c06b8a0a26c2e6254a80eb792e72&o=" alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Khulna</h1>
                <h2>130 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/540x270/65633294.webp?k=13eb1edcf90c9ee12f1f3b130c6435a9ec3175cb0633862a897a10ea25f2f029&o=" alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Satkhira</h1>
                <h2>223 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured