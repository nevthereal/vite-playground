import React from 'react'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

const Type = () => {
    const typingStr = useRef(null);

    useEffect(() => {
      const typed = new Typed(typingStr.current, {
        strings: ["Who", "Reads", "This", "Is", "Stupid"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []); 

    return (
        <div className='p-4'>
            <span ref={typingStr}></span>
        </div>
    )
}

export default Type