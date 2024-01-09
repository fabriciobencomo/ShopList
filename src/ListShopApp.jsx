import { useState } from 'react'
import { ListShopPage } from './shop/pages/ListShopPage'


function ListShopApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListShopPage></ListShopPage>
    </>
  )
}

export default ListShopApp
