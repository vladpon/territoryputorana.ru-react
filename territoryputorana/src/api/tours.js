export async function getTourByTourId (tourId) {

    const url = 'https://territoryputorana.ru/api/tours_api.php?gettourbytourid&tour_id=' + tourId
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
    const url = 'https://territoryputorana.ru/api/tours_api.php?gettours'
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