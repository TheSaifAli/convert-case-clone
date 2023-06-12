import React from 'react'

const Header= () => {
  return (
    <div className='m-2 rounded-md bg-gray-300 overflow-hidden'>
      <div className='flex justify-between items-center'>
        <button className='navBtn'>Convert Case</button>
        <button className='navBtn w-28'>Small Text Generator</button>
        <button className='navBtn'>More Tools</button>
      </div>
      <div className='m-4'><h1 className='font-bold text-md'>Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?</h1>
      <p className='text-sm mt-2'>Simply enter your text and choose the case you want to convert it to.</p>
      </div>
    </div>
  )
}

export default Header;
