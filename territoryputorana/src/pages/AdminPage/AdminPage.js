import React, { useEffect, useState } from 'react'
import { getTours } from '../../api/tours'

import './styles.scss'

const AdminPage = () => {
    const [tours, setTours] = useState();

    function setToursField(e) { 
      setTours(tours.map((tour,index) => (index == selectedTour) ? {...tour, [e.target.name]:e.target.value} : tour))
    }

    function setToursArrField(e, innerArrIndex) {
      setTours(tours.map((tour,index) => {
        if(index == selectedTour) {
          let arrItems = tour[e.target.name]
          arrItems[innerArrIndex] = e.target.value
          return {...tour, [e.target.name]:arrItems }
        } 
        else return tour
      }
      )      
    )}

    function setToursProgramField(e) { 
      setTours(tours.map((tour,index) => {
        if(index == selectedTour) {
          let tourProgram = tour[tourProgram]
          tourProgram[e.target.name] = e.target.value
          return {...tour, tourProgram:tourProgram }
        } 
        else return tour
      }
      ))
    }

    function setDayField(e, dayIndex) { 
      setTours(tours.map((tour,index) => {
        if(index == selectedTour) {
          let tourProgram = tour.tourProgram
          tourProgram.days[dayIndex][e.target.name] = e.target.value
          return {...tour, tourProgram:tourProgram }
        } 
        else return tour
      }
      ))
    }

    function setDayDesc(e, dayIndex, descIndex) { 
      setTours(tours.map((tour,index) => {
        if(index == selectedTour) {
          let tourProgram = tour.tourProgram
          tourProgram.days[dayIndex].dayDesc[descIndex] = e.target.value
          return {...tour, tourProgram:tourProgram }
        } 
        else return tour
      }
      ))
    }


    const saveTour = (e) => {
      e.preventDefault();
      
    }



    const [showTours, setShowTours] = useState(false);

    const [selectedTour, setSelectedTour] = useState(0);

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
                <span>title</span>
              </div>
              <input className='tours__field' name='title' value={tours[selectedTour].title} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>season</span>
              </div>
              <input className='tours__field' name='season' value={tours[selectedTour].season} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>year_time</span>
              </div>
              <input className='tours__field' name='yearTime' value={tours[selectedTour].yearTime} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>time</span>
              </div>
              <input className='tours__field' name='time' value={tours[selectedTour].time} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>group_size</span>
              </div>
              <input className='tours__field' name='groupSize' value={tours[selectedTour].groupSize} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>accmdtn_short</span>
              </div>
              <input className='tours__field' name='accmdtnShort' value={tours[selectedTour].accmdtnShort} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>difficulty_level</span>
              </div>
              <input className='tours__field' name='difficultyLevel' value={tours[selectedTour].difficultyLevel} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>price</span>
              </div>
              <input className='tours__field' name='price' value={tours[selectedTour].price} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>reference</span>
              </div>
              <input className='tours__field' name='reference' value={tours[selectedTour].reference} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>big_img</span>
              </div>
              <input className='tours__field' name='bigImg' value={tours[selectedTour].bigImg} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>small_img</span>
              </div>
              <input className='tours__field' name='smallImg' value={tours[selectedTour].smallImg} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>opt_img</span>
              </div>
              <input className='tours__field' name='optImg' value={tours[selectedTour].optImg} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>href</span>
              </div>
              <input className='tours__field' name='href' value={tours[selectedTour].href} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>about_h3</span>
              </div>
              <input className='tours__field' name='aboutH3' value={tours[selectedTour].aboutH3} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>tour_id</span>
              </div>
              <input className='tours__field' name='tourId' value={tours[selectedTour].tourId} onChange={(e) => setToursField(e)}></input>
              <div className='tours__field-name'>
                <span>descriptions</span>
              </div>
              <div className='tours__arr-fields'>
                {tours[selectedTour].descriptions && tours[selectedTour].descriptions.map( (paragraph, index) => <input className='tours__arr-field' name='descriptions' value={paragraph} key={index} onChange={ (e) => setToursArrField(e, index)}></input>)}               
              </div>
              <div className='tours__field-name'>
                <span>about</span>
              </div>
              <div className='tours__arr-fields'>
                {tours[selectedTour].about && tours[selectedTour].about.map( (paragraph, index) => <input className='tours__arr-field' name='about' value={paragraph} key={index} onChange={ (e) => setToursArrField(e, index)}></input>)}               
              </div>

              <div className='tours__field-name'>
                <span>tour_program.textH4</span>
              </div>
              <input className='tours__field' name='textH4' value={tours[selectedTour].tourProgram.textH4} onChange={(e) => setToursProgramField(e)}></input>
              <div className='tours__field-name'>
                <span>tour_program.begin</span>
              </div>
              <input className='tours__field' name='begin' value={tours[selectedTour].tourProgram.begin} onChange={(e) => setToursProgramField(e)}></input>

              <div className='tours__field-name'>
                <span>tour_program.days</span>
              </div>
              <div className='tours__days'>
                {tours[selectedTour].tourProgram.days && tours[selectedTour].tourProgram.days.map( (day, index) => {
                  return(                    
                      <div className='tours__day' key = {index}>
                        <span>{day.id}</span>
                        <input className='tours__field' name='dayTitle' value={day.dayTitle} onChange={(e) => setDayField(e, index)}></input>
                        <input className='tours__field' name='dayImg' value={day.dayImg} onChange={(e) => setDayField(e, index)}></input>
                        {day.dayDesc && day.dayDesc.map( (desc, descIndex) => <input className='tours__field' name='dayDesc' value={desc} onChange={(e) => setDayDesc(e, index, descIndex)} key = {descIndex}></input>)}
                      </div>
                    )
                  }
                )}
              </div>             
            </div>
            <button onClick={(e) => saveTour(e)}>save tour</button>
          </div>)

          }
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