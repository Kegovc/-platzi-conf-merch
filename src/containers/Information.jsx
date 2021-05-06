import React, { useRef ,useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext)
    const form = useRef(null)
    const { cart } = state
    const history = useHistory()
    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer)
        history.push('/checkout/payment')
    }
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
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name"/>
                        <input type="text" placeholder="Correo Electronico" name="email"/>
                        <input type="text" placeholder="Dirección" name="address"/>
                        <input type="text" placeholder="Apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="Pais" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="text" placeholder="CP" name="cp"/>
                        <input type="text" placeholder="Telefono" name="phone"/>
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(m=>(
                <div className="Information-item" key={m.nano_id}>
                    <div className="Information-element">
                        <h4>{m.title}</h4>
                        <span>${m.price}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Information
