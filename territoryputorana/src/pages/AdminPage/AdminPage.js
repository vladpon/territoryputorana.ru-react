import React, { useEffect, useState } from 'react'
import { getTours } from '../../api/tours'

const AdminPage = () => {
    const [tours, setTours] = useState();

    useEffect( () => {
        const getNewTours = async () => {
          const newTour = await getTours()
          setTours(newTour)
        }
        getNewTours().then(() => console.log(tours))
    }, [])

  return (
    <div>
        <h2>AdminPage</h2>
    </div>
  )
}

export default AdminPage