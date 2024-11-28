import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const ResponsiveHeader = ({setToggle ,toggle}) => {
    return (
        <div><div className='flex  justify-between items-center '> 
         <div>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-secondary_color' onClick={() => setToggle(!toggle)} width={25} height={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <Link to={'/'}>
                <img width={100} height={'auto'} src={logo} alt='Logo' />
            </Link>
          
        </div></div>
    )
}

export default ResponsiveHeader