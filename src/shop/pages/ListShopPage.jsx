import { useParams } from "react-router-dom"
import { Navbar, Menu, ListItems, CartModal } from "../components"

export const ListShopPage = () => {
  
  const {categoryName} = useParams()
  const category = categoryName
 
  return (
    <div>
      <div className='shadow-lg rounded-lg p-4'>
            <div className="container mx-auto">                
                <Navbar></Navbar>
                <Menu></Menu>
            </div>
            <div className="relative">
              <div className="absolute ml-12 left-3/4 z-0 top-0.5 bottom-0">
                <CartModal></CartModal>
              </div>
            </div>
      </div>
      <div className="container mx-auto">
        <ListItems category={category}></ListItems>
      </div>
    </div>
  )
}
