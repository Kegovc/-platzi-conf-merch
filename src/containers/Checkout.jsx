import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state
    const handleRemove = product => () => {
        removeFromCart(product)
    }
    const handleSumTotal = () => {
        const reducer = (v,c)=> v+c.price
        return cart.reduce(reducer,0)
    }
    return (
        <div className="Checkout">
            <div className="Checkout-content">
            {cart.length>0?<h3>Lista de Pedidos:</h3>:<h3>Sin Pedidos...</h3>}
                {cart.map(m=>(
                <div className="Checkout-item" key={m.nano_id}>
                    <div className="Checkout-element">
                        <h4>{m.title}</h4>
                        <span>${m.price}</span>
                    </div>
                    <button type="button" onClick={handleRemove(m)}>
                        <i className="fas fa-trash-alt"/>
                    </button>
                </div>
                ))}
            </div>
            {cart.length>0&&(
            <div className="Checkout-sidebar">
                <h3>Precio Total: $ {handleSumTotal()}</h3>
                <Link to="/checkout/information">
                    <button type="button">Continuar pedido</button>
                </Link>
            </div>
            )}
        </div>
    )
}

export default Checkout
