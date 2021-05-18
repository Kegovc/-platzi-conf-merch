import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button'
import '../styles/components/Payment.css'
import { useHistory } from 'react-router'



const Payment = () => {
    const history = useHistory()
    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state
    
    const paypalOptions = {
        clientId: 'AfGhAYaqSGz-Ys38hZCew4S1D81cHRXH1kRLCWwsj2bHvuPlnbrYx6cbosnh6aT8tEePbjWzM3aOqRyE',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    const handleSumTotal = () => {
        const reducer = (v,c)=> v+c.price
        return cart.reduce(reducer,0)
    }
    const handlePaymentSuccess = data => {
        console.log('handlePaymentSuccess',data)
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
    }
    const handlePaymentStart = _ => {
        console.log(_)
    }
    const handlePaymentError = _ => {
        console.log(_)
    }
    const handlePaymentCancel = _ => {
        console.log(_)
    }

    useEffect(() => {
        const amount = handleSumTotal()
        if(!amount){
            history.push('/')
        }
    }, [])
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(m=>(
                <div className="Payment-item" key={m.nano_id} onClick={()=> history.push('/checkout/success')}>
                    <div className="Payment-element">
                        <h4>{m.title}</h4>
                        <span>${m.price}</span>
                    </div>
                </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={()=>console.log('Start Payment')}
                        onPaymentSuccess={handlePaymentSuccess}
                        onPaymentError={error=>console.log(error)}
                        onPaymentCancel={data=>console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment
