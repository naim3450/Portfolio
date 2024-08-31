import React from 'react'
import Navber from './Layout/Navber'
import { Outlet } from 'react-router-dom'

const RoutLayouts = () => {
    return (
        <>
            <Navber />
            <Outlet />
        </>
    )
}

export default RoutLayouts