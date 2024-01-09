import { Navbar, Menu, ListItems } from "../components"

export const ListShopPage = () => {
  return (
    <div>
        <div className='shadow-lg rounded-lg p-4'>
            <div className="container mx-auto">                
                <Navbar></Navbar>
                <Menu></Menu>
            </div>
      </div>
      <div className="container mx-auto">
        <ListItems></ListItems>
      </div>
    </div>
  )
}
