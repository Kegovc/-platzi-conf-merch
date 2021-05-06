import React, { useState } from 'react'
import initialState from '../../initialState'
import { nanoid } from 'nanoid'

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, {...payload,nano_id:nanoid()}]
        })
    }
    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(ff=>ff.nano_id!==payload.nano_id)
        })
    }
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer||[], payload]
        })
    }
    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToBuyer,
        addToCart,
        removeFromCart,
        state
    }
}

export default useInitialState
