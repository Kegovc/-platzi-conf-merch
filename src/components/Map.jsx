import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
    const mapStyle = {
        height: "50vh",
        width: "100%"
    }
    const defaultCenter = {
        lat: 20.6426634,
        lng: -103.3853321
    }
    return (
        <LoadScript googleMapsApiKey="AIzaSyCIODt34L2_57fiY-QuAuJzW8l2U_tEa0M">
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
