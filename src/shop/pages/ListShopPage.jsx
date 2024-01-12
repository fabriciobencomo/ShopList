import { useParams } from "react-router-dom"
import { Navbar, Menu, ListItems } from "../components"

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
      </div>
      <div className="container mx-auto">
        <ListItems category={category}></ListItems>
      </div>
    </div>
  )
}
