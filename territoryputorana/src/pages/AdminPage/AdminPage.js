import React, { useEffect, useState } from 'react'
import { getTours } from '../../api/tours'

import './styles.scss'

const AdminPage = () => {
    const [tours, setTours] = useState();

    useEffect( () => {
        const getNewTours = async () => {
          const newTour = await getTours()
          setTours(newTour)
        }
        getNewTours().then(console.log(tours))
    }, [])

  return (
    <main className='admin-page'>
      <div className='admin-page__container'>
        <div className='admin-page__tours'>
          {tours && tours.map( (tour) => {
            return (
            <div className='admin-page__tour'>
              <input value={tour.title}></input>
            </div>
            )
          })}
          <div className='admin-page__tour'></div>
        </div>
      </div>
    </main>
  )
}

export default AdminPage