import React from 'react'


const DarkMode = () => {
    const myStyle = {
        color:'white',
        BackgroundColor:'black'
    }
    const enabledDarkMode =()=>{
       console.log('clicked');
    }
  return (
    <div>
      <div className='m-2 py-4 bg-gray-300 text-center' style={myStyle}>
        <button onClick={enabledDarkMode} className='bg-black p-2 rounded-md text-white text-sm'>Enabled Dark Mode</button>
      </div>
    </div>
  )
}

export default DarkMode;
