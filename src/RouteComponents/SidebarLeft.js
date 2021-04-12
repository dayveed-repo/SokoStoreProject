import React, { useState } from 'react'
import './SidebarLeft.css'
import SidebarOption from '../ElementComponents/SidebarOption'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function SidebarLeft() {

    const [activer, setactiver] = useState("Electronics")
    return (
        <div className="SidebarLeft">
            <div className="SidebarLeft__Opt">
                <SidebarOption  activer={activer} setactiver={setactiver} name="Electronics" numItems={9} />
                <SidebarOption  activer={activer} setactiver={setactiver} name="Face Masks" numItems={5} />
                <SidebarOption  activer={activer} setactiver={setactiver} name="Fresh Foods" numItems={6} />
                <SidebarOption  activer={activer} setactiver={setactiver} name="Grocery" numItems={3} />
                <SidebarOption  activer={activer} setactiver={setactiver} name="Home" numItems={3}  />
                <SidebarOption  activer={activer} setactiver={setactiver} name="Kids" numItems={3}  />
                
                <span>
                    <p>View all categories</p> 
                    <ArrowForwardIosRoundedIcon />
                </span>
            </div>  
        </div>
    )
}

export default SidebarLeft
