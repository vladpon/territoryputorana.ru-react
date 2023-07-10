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
        console.error('can not fetch tour by tou id ' + res.status)
        return
    }
}