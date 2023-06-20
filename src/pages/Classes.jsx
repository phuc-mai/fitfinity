import React from 'react'
import HeroPages from '../components/HeroPages'

const Classes = () => {
  return (
    <>
      <HeroPages name="Classes"/>
      <div className='classes'>
        <div className='cycling'>
          <div className='class-empty'></div>
          <div className='class-text'>
          <h3>Cycling</h3>
          <p><i class="fa-regular fa-user"></i>Dorian Yate <i class="fa-regular fa-clock"></i> Wed: 9:00 am</p>
          <div className="class_btn">
            <button>
              JOIN NOW <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Classes