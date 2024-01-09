import { useState } from 'react'
import { Navbar } from './shop/components'
import { Menu } from './shop/components/Menu'

function ListShopApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='shadow-lg rounded-lg p-4'>
        <Navbar></Navbar>
        <Menu></Menu>
      </div>
    </>
  )
}

export default ListShopApp
