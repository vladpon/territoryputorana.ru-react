export async function putRequest (req) {
    // req.userAgent = window.navigator.userAgent

    const url = 'https://territoryputorana.ru/api/requests_api.php'
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams(req)
    }


    let res = await fetch(url, options);

    if (res.ok) {        
        let resJSON = await res.json()
        return resJSON
    } else {
        console.error('cant write req to db ' + res.status)
        return
    }
}