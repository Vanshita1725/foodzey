import React from 'react'
import { Link } from 'react-router'

const Navlink = () => {
  const links =[{name:"Category"}, {name:"Products"},{name:"Pages"},{name:"Blog"},{name:"Element"}]
  return (
    <>  
    {links.map((Link) =>(
      <div>
        <div className='px-3 text-left md:cursor-pointer'>
          <h1 className='py-7'>{Link.name}</h1>
        </div>
      </div>
    ))}
      <div>
    </div>
    </>

  )
}

export default Navlink
