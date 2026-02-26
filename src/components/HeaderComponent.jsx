import React from 'react'
import aiginLogo from "../assets/aigin-logo.png"
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className='w-full h-20 flex justify-between bg-blue-500 text-white'>
        {/* Logo */}
        <section className='p-1'>
            <Link to="/"><img src={aiginLogo} alt='AIGIN' className='w-18 h-18 hover:animate-pulse'></img></Link>
        </section>
        {/* Nav Items */}
        <section className='p-5'>
            <nav className='w-40'>
                <ul className='flex justify-between'>
                    <div className='w-28 p-2'>
                        <Link to="/"><li className='cursor-pointer flex hover:font-bold'><i className="fa-solid fa-house m-1 text-yellow-400"></i>HOME</li></Link>
                    </div>
                    <div className='w-28 p-2'>
                        <Link to="/about"><li className='cursor-pointer flex hover:font-bold'><i className="fa-solid fa-lightbulb m-1 text-yellow-400"></i>ABOUT</li></Link>
                    </div>
                </ul>
            </nav>
        </section>
        {/* Sign In & Sign Up Buttons */}
        <section className='p-5'>
            <div className='w-56 flex justify-between'>
                <button className='w-28 bg-blue-300 border-2 border-white p-2 mr-2 rounded-lg cursor-pointer hover:shadow shadow-white'><i className="fa-solid fa-unlock"></i>SIGN IN</button>
                <button className='w-28 bg-blue-300 border-2 border-white p-2 rounded-lg cursor-pointer hover:shadow shadow-white'><i className="fa-solid fa-lock"></i>SIGN UP</button>
            </div>
        </section>
    </div>
  )
}

export default HeaderComponent