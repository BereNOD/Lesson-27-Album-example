import React from 'react'
import Navigation from '../components/Navigation'

const DefaultContainer = ({ children }) => (
    <div>
        <Navigation />
        {children}
    </div>
)

export default DefaultContainer