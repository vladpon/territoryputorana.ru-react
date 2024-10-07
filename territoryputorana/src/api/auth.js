export async function logIn (req) {

    const url = process.env.REACT_APP_API_URL + '/auth.php'
    const options = {        
        method: 'POST',
        // mode: "no-cors",
        credentials: "include",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams(req)
    }


    let res = await fetch(url, options).then( (res) => console.log(res));


    if (res.ok) {
        let resJSON = await res.json() 
        return resJSON
    } else {
        console.error('auth failed ' + res.status)
        return
    }
}


export async function checkOnline () {

    const url = process.env.REACT_APP_API_URL + '/auth.php'
    const options = {
        method: 'POST',
        // mode: "no-cors",
        credentials: "include",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams('auth')
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