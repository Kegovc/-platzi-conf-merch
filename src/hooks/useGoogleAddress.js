import {useState, useEffect} from 'react'

const useGoogleAddress = address => {
    const [map, setMap] = useState({lat:19,lng: -103})
    const API = `http://api.positionstack.com/v1/forward?access_key=4b4133a26c320272cda2be93ae0484b5&%20query=${address}` 
    //`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCK0WyTI1Cjk9FnyXnWL59KEeOG4T3GnI4`

    useEffect(async() => {
        console.log({address})
        if(!address){
            return
        }
        const response = await (await fetch(API)).json()
        const {latitude:lat,longitude:lng} = response.data[0]
        setMap({lat,lng})
    }, [])

    return map
}

export default useGoogleAddress
