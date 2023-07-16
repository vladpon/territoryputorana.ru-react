import React, { useEffect, useState } from 'react'
import { getTours } from '../../api/tours'

import './styles.scss'

const AdminPage = () => {
    const [tours, setTours] = useState();

    function setToursField(e) { 
      console.log(e.target.name)
      console.log(e.target.value)
      setTours(tours.map((tour,index) => (index === selectedTour) ? {...tour, [e.target.name]:e.target.value} : tour))
    }

    const [showTours, setShowTours] = useState(false);

    const [selectedTour, setSelectedTour] = useState(1);

    useEffect( () => {
        getTours().then((tours) => {
                      setTours(tours)
                      console.log(tours)
        })
    }, [])


    const renderTours = () => {
      return (
        <>
          {tours && (<div className='tours'>
            <select className='tours__select' onChange={ (e) => setSelectedTour(e.target.value)}>
              {tours && tours.map( (tour, index) => {
                return (
                <option key = {tour.tourId} value = {index}>
                  {tour.title}
                </option>
                )
              })}
            </select>
            <div className='tours__content'>
              <div className='tours__field-name'>
                <span>Title</span>
              </div>
              <input className='tours__field' name='title' value={tours[selectedTour].title} onChange={(e) => setToursField(e)}></input>
            </div>
          </div>)}
        </>
      )
    }

  return (
    <main className='admin-page'>
      <div className='admin-page__wrapper'>
        <div className='admin-page__adminka adminka'>
          <div className='adminka__tabs'>
            <div  className='adminka__tab' onClick={() => setShowTours(true)}>Tours</div>
            <div  className='adminka__tab' onClick={() => setShowTours(false)}>Gallery</div>
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