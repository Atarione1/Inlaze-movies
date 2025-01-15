
import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className=' flex justify-center mx-auto bg-black h-16 items-center text-white text-center gap-1 md:gap-8 font-bold'>
      <NavbarItem title={"Populares"} param={'fetchPopular'} />
      <NavbarItem title={"Tendencia"} param={'fetchTrending'} />
      <NavbarItem title={"Mejor calificados"} param={'fetchTopRated'} />
    </div>
  )
}

export default Navbar