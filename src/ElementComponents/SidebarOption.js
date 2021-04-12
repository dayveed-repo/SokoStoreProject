import React from 'react'
import './SidebarOption.css'

function SidebarOption({ name, numItems, activer, setactiver }) {
    return (
        <div className="SidebarOption" onClick={() => setactiver(name)} style={{ borderRight: `${activer === name ? "5px solid #2766cc" : "none"}`, background: `${activer === name ? "linear-gradient(to right, white, #dce6f3)" : "none"}` }}>
            {name} ({numItems})
        </div>
    )
}

export default SidebarOption
