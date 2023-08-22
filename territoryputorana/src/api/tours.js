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
    const url = process.env.REACT_APP_API_URL + '/tours_api.php?gettours'
    const options = {
        method: 'GET'
    }


    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch tours' + res.status)
        return
    }
}

export async function updateTour (tour) {
    const url = process.env.REACT_APP_API_URL + '/tour_update.php'
    
    // let toursObj = {
    //     'title' : tour.title,
    //     'season' : tour.season,
    //     'yearTime' : tour.yearTime,
    //     'time' : tour.time,
    //     'groupSize' : tour.groupSize,
    //     'accmdtnShort' : tour.accmdtnShort,
    //     'difficultyLevel' : tour.difficultyLevel,
    //     'price' : tour.price,
    //     'bigImg' : tour.bigImg,
    //     'smallImg' : tour.smallImg,
    //     'optImg' : tour.optImg,
    //     'href' : tour.href,
    //     'aboutH3' : tour.aboutH3,
    //     'tourId' : tour.tourId,
    //     'reference' : tour.reference
    // }

    // let data = {
    //     'updatetour': '',
    //     'tour' : toursObj
    // }

    let data = JSON.stringify(tour);

    const options = {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: data
    }


    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json() 
        return resJSON
    } else {
        console.error('auth failed ' + res.status)
        return
    }
}