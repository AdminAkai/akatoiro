import React, { useEffect, useState, useRef } from 'react';

import MainNavbar from './MainNavbar';

function Navbar({ logo, items }) {
    
    const [openDrawer, setOpenDrawer] = useState(false)
    const drawerRef = useRef(null)

    useEffect(() => {
        const closeDrawer = event => {
            if (drawerRef !== null) {
                if (drawerRef.current && drawerRef?.current?.contains(event.target)) {
                    return
                }
            }
            setOpenDrawer(false)
        }
        document.addEventListener("mousedown", closeDrawer)
        return () => document.removeEventListener("mousedown", closeDrawer)
    }, [])
    
    return (
        <MainNavbar 
            logo={logo} 
            items={items} 
            onClick={() => setOpenDrawer(true)} 
            openDrawer={openDrawer} 
            drawerRef={drawerRef} 
        />
    )
}

export default Navbar