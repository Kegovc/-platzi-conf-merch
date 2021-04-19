import React from 'react'
import Header from './Header'
import '../styles/components/Layout.css'

import Footer from './Footer'
const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout