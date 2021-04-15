import React from 'react'
import './serverName.scss'
import * as FaIcons from 'react-icons/fa'

const ServerName: React.FC = () => {
    return (
        <div className='content-name'  >
            <h3 className='content-name__title'  >Servidor Rol</h3>
            <FaIcons.FaAngleDown className='content-name__icon'  />
        </div>
    )
}

export default ServerName
