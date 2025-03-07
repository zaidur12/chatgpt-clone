import React from 'react'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    <>
      <div className='text-xl text-white'>MENU</div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default DashLayout
