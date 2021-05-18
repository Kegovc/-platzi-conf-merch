import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import '../styles/components/Success.css'
import useGoogleAddress from '../hooks/useGoogleAddress'
import { useHistory } from 'react-router'

const Success = () => {
    const history = useHistory()
    const {state} = useContext(AppContext)
    const { buyer:buyer_, cart } = state
    const buyer = buyer_[0]??{}
    const { address, apto, city, country, state:state_, cp } = buyer
    const location = useGoogleAddress(`${apto||''} ${address||''} ${cp||''} ${city||''} ${state_||''} ${country||''}`.trim())
    const handleSumTotal = () => {
        const reducer = (v,c)=> v+c.price
        return cart.reduce(reducer,0)
    }
    useEffect(() => {
        const amount = handleSumTotal()
        if(!amount){
            history.push('/')
        }
    }, [])
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{buyer.name}, Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">
                    <Map data={location} />
                </div>
            </div>
        </div>
    )
}

export default Success