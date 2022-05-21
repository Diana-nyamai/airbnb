import React from 'react'

function Card() {
  return (
      <div className='card--container'>
            <div className="card">
            <img src="../mage1.png" alt='1' className="card--image" />
            <div className="card--stats">
                <span className='fa fa-star' style={{fontSize: '20px', color: '#FE395C'}}></span>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span style={{fontWeight: 'bold'}}>From $136</span> / person</p>
        </div>

        <div className="card">
            <img src="../image2.png" alt='1' className="card--image" />
            <div className="card--stats">
                <span className='fa fa-star' style={{fontSize: '20px', color: '#FE395C'}}></span>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span style={{fontWeight: 'bold'}}>From $136</span> / person</p>
        </div>

        <div className="card">
            <img src="../mage1.png" alt='1' className="card--image" />
            <div className="card--stats">
                <span className='fa fa-star' style={{fontSize: '20px', color: '#FE395C'}}></span>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span style={{fontWeight: 'bold'}}>From $136</span> / person</p>
        </div>
    </div>
  )
}

export default Card