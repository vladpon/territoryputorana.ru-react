
export async function getToursIds () {

    const url = process.env.REACT_APP_API_URL + '/get_toursids.php'
    const options = {
        method: 'GET'
    }


    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch tours ids' + res.status)
        return
    }
}


export async function getTourById (tourId) {
    const url = process.env.REACT_APP_API_URL + '/get_tourbyid.php?tour_id=' + tourId
    const options = {
        method: 'GET'
    }


    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch tour' + res.status)
        return
    }
}




export async function getTourByTourId (tourId) {

    const url = process.env.REACT_APP_API_URL + '/tours_api.php?gettourbytourid&tour_id=' + tourId
    const options = {
        method: 'GET'
    }


    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch tour by tour id ' + res.status)
        return
    }
}




export async function getTours () {
    let tours = []
    await getToursIds().then( (ids) => {
        ids.map( (id) => {
            getTourById(id.tourId).then((tour)=>tours.push(tour))
            }
        )
    })
    return tours
}






export async function updateTour (tour) {
    const url = process.env.REACT_APP_API_URL + '/tour_update.php'
    
    let data = JSON.stringify(tour);

    const options = {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: data
    }


    let res = await fetch(url, options)

    if (res.ok) {
        let resJSON = await res.json() 
        return resJSON
    } else {
        console.error('failed ' + res.status)
        return
    }
}