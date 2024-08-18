import React from 'react'

const Navbar = () => {
  return (
    <navbar className='backdrop-blur-lg bg-indigo-600/30 shadow-xl flex justify-between p-3 rounded-lg text-white'>
        <div className="font-bold text-lg">
           <span className='text-red-600'>&lt;</span>Pass<span className='text-red-600'>OP/&gt;</span>
          </div>
        <ul>
            <li className='flex gap-8'>
                <a className='hover:font-bold' href='#'>Home</a>
                <a className='hover:font-bold' href='#'>Contact</a>
                <a className='hover:font-bold' href='#'>About</a>
                <a className='hover:font-bold' href='#'>About</a>
            </li>
        </ul>
        </navbar>
  )
}

export default Navbar