export async function getGallery () {
    const url = process.env.REACT_APP_API_URL + '/gallery.php'
    const options = {
        method: 'GET'
    }

    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch gallery' + res.status)
        return
    }
}


export async function getGalleryCategories () {
    const url = process.env.REACT_APP_API_URL + '/gallery_cat.php'
    const options = {
        method: 'GET'
    }

    let res = await fetch(url, options);

    if (res.ok) {
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('can not fetch gallery categories' + res.status)
        return
    }
}