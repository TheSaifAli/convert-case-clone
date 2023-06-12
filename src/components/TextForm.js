import { React, useState } from 'react';
import DarkMode from './DarkMode';


const TextForm = (props) => {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleSentClick=()=>{
      let newText = text.toSentenceCase();
      setText(newText);
      
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    
}
const handleAltClick=()=>{
  let newText = text.toAlternatingCase();
  setText(newText);
  
}
const handleCapClick=()=>{
  let newText = text.toCapitalizeCase();
  setText(newText);
  
}

    const handleClearClick=()=>{
      let newText = '';
      setText(newText);
      
  }

    
    const handleChange =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <div className='m-2 bg-gray-300'>
        <div>
        <textarea className='w-full border-8 p-2' placeholder='Type or paste your content here' value={text} onChange={handleChange} rows={8} ></textarea>
        </div>

        <div className='flex flex-wrap justify-center items-center
        '>
        <button className='textFormBtn' onClick={handleUpClick}>UPPERCASE</button>
        <button className='textFormBtn' onClick={handleSentClick}>Sentence case</button>
        <button className='textFormBtn' onClick={handleLoClick}>lower case</button>
        <button className='textFormBtn' onClick={handleCapClick}>Capitalized Case</button>
        <button className='textFormBtn' onClick={handleAltClick}>aLtErNaTiNg cAsE</button>
        <button className='textFormBtn' onClick={handleClearClick}>Clear</button>
        </div>

        <div className='flex flex-wrap items-center justify-center mt-4 pb-4'>
          <p className='text-sm'>Character Count: <span className='font-bold'>{text.length}</span> |   Word Count: <span className='font-semibold'>{text.split(' ').length}</span></p>
        </div>
    </div>
  )
}

export default TextForm