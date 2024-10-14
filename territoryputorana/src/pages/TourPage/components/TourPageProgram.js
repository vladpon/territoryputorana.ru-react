import React from 'react'

const TourPageProgram = (props) => {
    const {tourProgram} = props.tour
  return (
    <div className = 'tp-program__container'>
        <div className = "tp-program">
            <h2>{tourProgram.programTitle}</h2>
            {tourProgram.programSubtitle && <h4>{tourProgram.programSubtitle}</h4>}
            {tourProgram.programPreface && <p>{tourProgram.programPreface}</p>}
            {tourProgram.days && tourProgram.days.map( (day) => {
                return <div className = "tp-program__day" key = {day.dayTitle}>
                            <div className = "tp-program__text">
                                <h3>{day.dayTitle}</h3>
                                {day.dayDesc && day.dayDesc.map( (p, index) => <p key = {index}>{p}</p>)}
                            </div>
                            <div className="tp-program__img">
                                <img src={day.dayImg} />
                            </div>
                        </div>   
            })}             
            
        </div>
    </div>

  )
}

export default TourPageProgram