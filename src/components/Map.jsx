import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({data}) => {
    const mapStyle = {
        height: "50vh",
        width: "100%"
    }
    const defaultCenter = {
        ...data
    }
    return (
        <LoadScript googleMapsApiKey="AIzaSyCK0WyTI1Cjk9FnyXnWL59KEeOG4T3GnI4">
            <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={17}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
