import React, { useEffect, useState } from 'react'
import { getTours } from '../../api/tours'

import './styles.scss'

const AdminPage = () => {
    const [tours, setTours] = useState();

    const [showTours, setShowTours] = useState(true);

    useEffect( () => {
        const getNewTours = async () => {
          const newTour = await getTours()
          setTours(newTour)
        }
        getNewTours().then(() => console.log(tours))
    }, [])


    const renderTours = () => {
      return (
        <div className='admin-page__tours'>
          {tours && tours.map( (tour) => {
            return (
            <div className='admin-page__tour'>
              <h3>tours</h3>
              <input value={tour.title}></input>
            </div>
            )
          })}
        </div>
      )
    }

  return (
    <main className='admin-page'>
      <div className='admin-page__wrapper'>
        <div className='admin-page__adminka adminka'>
          <div className='adminka__tabs'>
            <div  className='adminka__tab' onClick={() => setShowTours(true)}>Tours</div>
            <div  className='adminka__tab'>Gallery</div>
          </div>
          <div className='adminka__content'>
            {showTours && renderTours()}
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default AdminPage