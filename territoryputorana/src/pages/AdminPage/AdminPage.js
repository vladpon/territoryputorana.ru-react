import React, { useEffect, useState } from 'react'
import { getTours, updateTour, getToursIds, getTourById} from '../../api/tours'
import { logIn, checkOnline } from '../../api/auth'
import { getGallery, getGalleryCategories } from '../../api/gallery'

import blankTour from '../../data/blanktour.json'


import './styles.scss'


const AdminPage = () => {

    const [ toursIds, setToursIds ] = useState(null);

    const [tours, setTours] = useState();
    const [gallery, setGallery] = useState();
    const [galleryCat, setGalleryCat] = useState();

    const [showTours, setShowTours] = useState(false);
    const [tab, setTab] = useState("");

    const [selectedTour, setSelectedTour] = useState(0);
    const [currentTour, setCurrentTour] = useState(blankTour);

    const [online, setOnline] = useState(false);

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
      const data = tours[selectedTour];
      updateTour(data).then( (res) => {
        console.log(res)
      })      
    }

    const submitLogIn = (e) => {
      e.preventDefault();
      const data = new FormData(e.target.form);
      data.append('auth', '');
      logIn(data).then(res => {
        res.login === 'success' ? setOnline(true) : setOnline(false)
      })
    }


   
    useEffect( () => {
      getToursIds().then((toursIdsArr) => {
        setToursIds(toursIdsArr)
        setSelectedTour(toursIdsArr[0].tourId)
      })
    }, [])


    // useEffect( () => {
    //     getTours().then((tours) => {
    //                   setTours(tours)
    //                   console.log(tours)
    //     })
    // }, [])

    useEffect( () => {
      getGallery().then( (gallery) => {
                      setGallery(gallery)
                      console.log(gallery)
      })
    }, [])
    useEffect( () => {
      getGalleryCategories().then( (galleryCat) => {
                      setGalleryCat(galleryCat)
                      console.log(galleryCat)
      })
    }, [])

    useEffect( () => {
        checkOnline().then(res => {
          res.login === 'success' ? setOnline(true) : setOnline(false)
          console.log('constructor checking auth ', res)
        })
    }, [])

    useEffect( () => {
      selectedTour ? getTourById(selectedTour).then( tour => setCurrentTour(tour)) : console.log(selectedTour)
    }, [selectedTour])

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

    function setCatName(e, id) {
      setGalleryCat(galleryCat.map((cat) => (cat.id == id) ? {...gallery, [e.target.name]:e.target.value} : cat))
    }



    const renderGallery = () => {
      return (
        <>
          {galleryCat && (
            <div className='gallery-cat'>
              <span>Categories</span>
              {galleryCat.map( (cat, index) => {
                return <input className = 'gallery-cat_name' name = 'catName' key={index} value = {cat.catName} onChange={ (e) => setCatName(e, cat.id)}></input>
              })}
            </div>
          )}
        </>
      )
    }

    


    const renderToursContainer = () => {
      return (
        <div className='adminka__tours-container'>
          { toursIds && (
            <select onChange={ (e) => setSelectedTour(e.target.value)}>
              {toursIds.map( (tourId, index) => <option key = {index}>{tourId.tourId}</option>)}
            </select>
          )}
          { (renderTour()) }
        </div>
      )
    }

    const renderTour = () => {
      return (
        <div className='tfs'>
          <div className='tfs__main'>
            <h4>main</h4>
            <textarea className='tfs__field' placeholder="tour title"  value={currentTour.title} onChange={e => setCurrentTour({...currentTour, ['title']:e.target.value})} />
            {currentTour.price ? (<textarea className='tfs__field' placeholder="tour price"  value={currentTour.price} onChange={e => setCurrentTour({...currentTour, ['price']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour price"  value={""} onChange={e => setCurrentTour({...currentTour, ['price']:e.target.value})} />))}
            {currentTour.varPrice ? (<textarea className='tfs__field' placeholder="tour varPrice"  value={currentTour.varPrice} onChange={e => setCurrentTour({...currentTour, ['varPrice']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour varPrice"  value={""} onChange={e => setCurrentTour({...currentTour, ['varPrice']:e.target.value})} />))}
            {currentTour.season ? (<textarea className='tfs__field' placeholder="tour season"  value={currentTour.season} onChange={e => setCurrentTour({...currentTour, ['season']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour season"  value={""} onChange={e => setCurrentTour({...currentTour, ['season']:e.target.value})} />))}
            {currentTour.time ? (<textarea className='tfs__field' placeholder="tour time"  value={currentTour.time} onChange={e => setCurrentTour({...currentTour, ['time']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour time"  value={""} onChange={e => setCurrentTour({...currentTour, ['time']:e.target.value})} />))}
            {currentTour.reference ? (<textarea className='tfs__field' placeholder="tour reference"  value={currentTour.reference} onChange={e => setCurrentTour({...currentTour, ['reference']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour reference"  value={""} onChange={e => setCurrentTour({...currentTour, ['reference']:e.target.value})} />))}
            {currentTour.varReference ? (<textarea className='tfs__field' placeholder="tour varReference"  value={currentTour.varReference} onChange={e => setCurrentTour({...currentTour, ['varReference']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour varReference"  value={""} onChange={e => setCurrentTour({...currentTour, ['varReference']:e.target.value})} />))}
            {currentTour.included ? (<textarea className='tfs__field' placeholder="tour included"  value={currentTour.included} onChange={e => setCurrentTour({...currentTour, ['included']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour included"  value={""} onChange={e => setCurrentTour({...currentTour, ['included']:e.target.value})} />))}
            {currentTour.varIncluded ? (<textarea className='tfs__field' placeholder="tour varIncluded"  value={currentTour.varIncluded} onChange={e => setCurrentTour({...currentTour, ['varIncluded']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour varIncluded"  value={""} onChange={e => setCurrentTour({...currentTour, ['varIncluded']:e.target.value})} />))}
            {currentTour.bigImg ? (<textarea className='tfs__field' placeholder="tour bigImg"  value={currentTour.bigImg} onChange={e => setCurrentTour({...currentTour, ['bigImg']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour bigImg"  value={""} onChange={e => setCurrentTour({...currentTour, ['bigImg']:e.target.value})} />))}
            {currentTour.smallImg ? (<textarea className='tfs__field' placeholder="tour smallImg"  value={currentTour.smallImg} onChange={e => setCurrentTour({...currentTour, ['smallImg']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour smallImg"  value={""} onChange={e => setCurrentTour({...currentTour, ['smallImg']:e.target.value})} />))}
            {currentTour.href ? (<textarea className='tfs__field' placeholder="tour href"  value={currentTour.href} onChange={e => setCurrentTour({...currentTour, ['href']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour href"  value={""} onChange={e => setCurrentTour({...currentTour, ['href']:e.target.value})} />))}
            {currentTour.details ? (<textarea className='tfs__field' placeholder="tour details"  value={currentTour.details} onChange={e => setCurrentTour({...currentTour, ['details']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour details"  value={""} onChange={e => setCurrentTour({...currentTour, ['details']:e.target.value})} />))}
            {currentTour.varDetails ? (<textarea className='tfs__field' placeholder="tour varDetails"  value={currentTour.varDetails} onChange={e => setCurrentTour({...currentTour, ['varDetails']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour varDetails"  value={""} onChange={e => setCurrentTour({...currentTour, ['varDetails']:e.target.value})} />))}
            {currentTour.deyailsTitle ? (<textarea className='tfs__field' placeholder="tour detailsTitle"  value={currentTour.detailsTitle} onChange={e => setCurrentTour({...currentTour, ['detailsTitle']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour deyailsTitle"  value={""} onChange={e => setCurrentTour({...currentTour, ['deyailsTitle']:e.target.value})} />))}
            {currentTour.varDetailsTitle ? (<textarea className='tfs__field' placeholder="tour varDetailsTitle"  value={currentTour.varDetailsTitle} onChange={e => setCurrentTour({...currentTour, ['varDetailsTitle']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour varDetailsTitle"  value={""} onChange={e => setCurrentTour({...currentTour, ['varDetailsTitle']:e.target.value})} />))}
            {currentTour.aboutTitle ? (<textarea className='tfs__field' placeholder="tour aboutTitle"  value={currentTour.aboutTitle} onChange={e => setCurrentTour({...currentTour, ['aboutTitle']:e.target.value})} />) : ((<textarea className='tfs__field' placeholder="tour aboutTitle"  value={""} onChange={e => setCurrentTour({...currentTour, ['aboutTitle']:e.target.value})} />))}
            
          </div>
          <div className='tfs__other'>
            <h4>desriptions</h4>
            {currentTour.description ? (
              currentTour.description.map( (desc, index) => {
                return (
                  <div className='tfs__row' key = {index}>
                    <textarea className='tfs__field' placeholder="tour decs"  value={desc} onChange={e => {
                      let el = currentTour.description
                      el[index] = e.target.value
                      setCurrentTour({...currentTour, ['description']:el})
                      }
                    } />
                    <button onClick={() => 
                      {
                        if(currentTour.description.length > 1)
                          {
                            let newDescArr = currentTour['description']
                            newDescArr.splice(index, 1)
                            setCurrentTour({...currentTour, ['description']:newDescArr})
                          }
                        else 
                          {
                            let newCurrentTour = {...currentTour}
                            delete newCurrentTour['description']
                            setCurrentTour(newCurrentTour)
                          }
                      }
                    }>-</button>
                  </div>)
              }
              )) : (<span>no desc</span>)
            }
            <button onClick={() => {
                let newDescArr = currentTour.description ? currentTour.description : []
                newDescArr[newDescArr.length] = ""
                setCurrentTour({...currentTour, ['description']:newDescArr})
                }
              }>add</button>
          </div>


          <div className='tfs__other'>
            <h4>abouts</h4>
            {currentTour.about ? (
              currentTour.about.map( (about, index) => {
                return (
                  <div className='tfs__row' key={index}>
                    <textarea className='tfs__field' placeholder="tour about"  value={about} onChange={e => {
                      let el = currentTour.about
                      el[index] = e.target.value
                      setCurrentTour({...currentTour, ['about']:el})
                      }
                    } />
                    <button onClick={() => 
                      {
                        if(currentTour.about.length > 1)
                          {
                            let newDescArr = currentTour['about']
                            newDescArr.splice(index, 1)
                            setCurrentTour({...currentTour, ['about']:newDescArr})
                          }
                        else 
                          {
                            let newCurrentTour = {...currentTour}
                            delete newCurrentTour['about']
                            setCurrentTour(newCurrentTour)
                          }
                      }
                    }>-</button>
                  </div>
                )
              } )
            ) : (<span>no about</span>)
          }
          <button onClick={() => {
              let newDescArr = currentTour.about ? currentTour.about : []
              newDescArr[newDescArr.length] = ""
              setCurrentTour({...currentTour, ['about']:newDescArr})
              }
            }>add</button> 
          </div>

          <div className='tfs__other'>
            <h4>tour program</h4>
            {currentTour.tourProgram.programTitle ? (<textarea className='tfs__field' placeholder="tour programTitle"  value={currentTour.tourProgram.programTitle} onChange={e => {
                            let newTourProgram = currentTour.tourProgram
                            newTourProgram.programTitle = e.target.value
                            setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                          }
                         } />) : (<textarea className='tfs__field' placeholder="tour programTitle"  value={""} onChange={e => {
                          let newTourProgram = currentTour.tourProgram
                          newTourProgram.programTitle = e.target.value
                          setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                        }
                       } />)}
            {currentTour.tourProgram.programSubtitle ? (<textarea className='tfs__field' placeholder="tour programSubtitle"  value={currentTour.tourProgram.programSubtitle} onChange={e => {
                            let newTourProgram = currentTour.tourProgram
                            newTourProgram.programSubtitle = e.target.value
                            setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                          }
                         } />) : (<textarea className='tfs__field' placeholder="tour programSubtitle"  value={""} onChange={e => {
                          let newTourProgram = currentTour.tourProgram
                          newTourProgram.programSubtitle = e.target.value
                          setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                        }
                       } />)}
            {currentTour.tourProgram.programPreface ? (<textarea className='tfs__field' placeholder="tour programPreface"  value={currentTour.tourProgram.programPreface} onChange={e => {
                            let newTourProgram = currentTour.tourProgram
                            newTourProgram.programPreface = e.target.value
                            setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                          }
                         } />) : (<textarea className='tfs__field' placeholder="tour programPreface"  value={""} onChange={e => {
                          let newTourProgram = currentTour.tourProgram
                          newTourProgram.programPreface = e.target.value
                          setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                        }
                       } />)}
            {currentTour.tourProgram.days ? (
              currentTour.tourProgram.days.map( (day, index) => {
                return (
                  <div className='tfs__column' key={index}>
                    <h5>{day.dayTitle}</h5>
                    <button onClick={() => 
                        {
                          if(currentTour.tourProgram.days.length > 1)
                            {
                              let newProgram = currentTour.tourProgram;
                              newProgram.days.splice(index, 1)
                              setCurrentTour({...currentTour, ['tourProgram']:newProgram})
                            }
                          else 
                            {
                              let newCurrentTour = {...currentTour}
                              delete newCurrentTour.tourProgram.days
                              setCurrentTour(newCurrentTour)
                            }
                        }
                      }>delete day</button>
                      <textarea className='tfs__field' placeholder="day title"  value={day.dayTitle} onChange={e => {
                        let el = currentTour.tourProgram
                        el.days[index].dayTitle = e.target.value
                        setCurrentTour({...currentTour, ['tourProgram']:el})
                        }
                      } />
                      <textarea className='tfs__field' placeholder="day img"  value={day.dayImg} onChange={e => {
                        let el = currentTour.tourProgram
                        el.days[index].dayImg = e.target.value
                        setCurrentTour({...currentTour, ['tourProgram']:el})
                        }
                      } />
                      {day.dayDesc ? (
                        day.dayDesc.map( (desc, i) => {
                          return (
                              <div key = {i} className='tfs__row tfs__row_add'>
                                <textarea className='tfs__field' placeholder='day desc' value={desc} onChange = {e => {
                                  let newTourProgram = currentTour.tourProgram
                                  newTourProgram.days[index].dayDesc[i] = e.target.value
                                  setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                                }}/>
                                <button onClick={() => 
                                  {
                                    if(currentTour.tourProgram.days[index].dayDesc.length > 1)
                                      {
                                        let newTourProgram = currentTour['tourProgram']
                                        newTourProgram.days[index].dayDesc.splice(i, 1)
                                        setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                                      }
                                    else 
                                      {
                                        let newTourProgram = currentTour['tourProgram']
                                        delete newTourProgram.days[index]['dayDesc']
                                        setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                                      }
                                  }
                                }>-</button>
                              </div>
                          )
                        })
                      ) : console.log('no dayDesc')}
                      <button onClick={() => 
                          {
                            let newDayDescArr = currentTour.tourProgram.days[index].dayDesc ? currentTour.tourProgram.days[index].dayDesc : []
                            newDayDescArr[newDayDescArr.length] = ""
                            let newTourProgram = currentTour.tourProgram
                            newTourProgram.days[index].dayDesc = newDayDescArr
                            setCurrentTour({...currentTour, ['tourProgram']:newTourProgram})
                          }
                        }>add description</button>
                      
                  </div>
                )
              } )
            ) : (<span>no program</span>)
          }
          <button onClick={() => {
              let newDaysArr = currentTour.tourProgram.days ? currentTour.tourProgram.days : []
              newDaysArr[newDaysArr.length] = {}
              let newProgram = currentTour.tourProgram
              newProgram.days = newDaysArr
              setCurrentTour({...currentTour, ['tourProgram']:newProgram})
              }
            }>add day</button> 
          </div>




          {/*           TOUR PHOTOS                 */}
          <div className='tfs__other'>
            <h4>Photos</h4>
            {(currentTour.tourPhoto && currentTour.tourPhoto.length) ? (
                currentTour.tourPhoto.map( (photo, index) => {
                  return (
                    <div className='tfs__column' key={index}>
                      <h5>{index+1}</h5>
                      <button onClick={() => 
                          {
                            if(currentTour.tourPhoto.length > 1)
                              {
                                let newTourPhotoArr = currentTour.tourPhoto;
                                newTourPhotoArr.splice(index, 1)
                                setCurrentTour({...currentTour, ['tourPhoto']:newTourPhotoArr})
                              }
                            else 
                              {
                                let newCurrentTour = {...currentTour}
                                delete newCurrentTour.tourPhoto
                                setCurrentTour(newCurrentTour)
                              }
                          }
                        }>delete photo</button>
                        <textarea className='tfs__field' placeholder="source"  value={photo.path} onChange={e => {
                          let el = currentTour.tourPhoto
                          el[index].path = e.target.value
                          setCurrentTour({...currentTour, ['tourPhoto']:el})
                          }
                        } />
                        <textarea className='tfs__field' placeholder="alt"  value={photo.alt} onChange={e => {
                          let el = currentTour.tourPhoto
                          el[index].alt = e.target.value
                          setCurrentTour({...currentTour, ['tourPhoto']:el})
                          }
                        } />
                                                
                    </div>
                  )
                }
              )) : (<span>no photos</span>) }
              <button onClick={() => 
                            {
                              let newPhotoArr = currentTour.tourPhoto ? currentTour.tourPhoto : []
                              newPhotoArr[newPhotoArr.length] = {"path":"", "alt":""}
                              setCurrentTour({...currentTour, ['tourPhoto']:newPhotoArr})
                            }
                          }>add photo</button>
            </div>
        



        </div>
      )
    }




  return (
    <main className='admin-page'>

      <div className='admin-page__wrapper'>
        {online ? 
        (<div className='admin-page__adminka adminka'>
          <div className='adminka__tabs'>
            <div  className='adminka__tab' onClick={() => setTab('tours')}>Tours</div>
            <div  className='adminka__tab' onClick={() => setTab('gallery')}>Gallery</div>
          </div>
          <div className='adminka__content'>
            {(tab === 'tours') && renderToursContainer()}
            {(tab === 'gallery') && renderGallery()}
          </div>
        </div>) : (
          <form>
            <input type='text' name = 'login'></input>
            <input type='password' name = 'password'></input>
            <input type='submit' value='submit' onClick={ (e) => submitLogIn(e)}></input>
          </form>
        ) }
      </div>
    </main>
  )
}

export default AdminPage