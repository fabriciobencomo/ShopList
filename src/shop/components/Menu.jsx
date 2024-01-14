import { getCategories } from "../../helpers/getCategories"
import { Link, useParams } from "react-router-dom"
import { ListShopPage } from "../pages/ListShopPage";

export const Menu = () => {
  const categories = getCategories()
  const {categoryName} = useParams() ?? ''

  const isSelected = (category = '') => {
    if(categoryName){
      if(categoryName.toLowerCase() == category.toLowerCase()) return true
    }
  }


  return (
    <div className="mt-12 mx-auto">
        <ul className="flex gap-12 justify-center">
          {
            categories.map(category => (
              <Link to={`/categories/${category.toLowerCase()}`}><li className={isSelected(category) ? 'bg-green-800 text-white rounded-xl p-2 shadow-md' : 'hover:bg-green-800 hover:text-white hover:rounded-xl p-2 hover:shadow-md'}>{category}</li></Link> 
            ))
          }
        </ul>
    </div>
  )
}
