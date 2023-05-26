import React from 'react'

const Nav = () => {

  return (
    <div className='bg-black text-white p-4'>
        <div className='flex justify-between gap-6'>
            <a href="/" className='font-black text-5xl'><p>N</p></a>
            <div className='my-auto uppercase font-bold flex gap-4'>
                <a href="/lol"><p>Lol</p></a>
                <p>Nothing</p>
                <p>Idiot</p>
            </div>
        </div>
    </div>
  )
}

export default Nav