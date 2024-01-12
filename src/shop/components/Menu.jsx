import { getCategories } from "../../helpers/getCategories"
import { Link } from "react-router-dom"
import { ListShopPage } from "../pages/ListShopPage";

export const Menu = () => {
  const categories = getCategories()

  return (
    <div className="mt-12 mx-auto">
        <ul className="flex gap-12 justify-center">
          {
            categories.map(category => (
              <Link to={`/categories/${category.toLowerCase()}`}><li className="hover:bg-green-800 hover:text-white hover:rounded-xl p-2 hover:shadow-md">{category}</li></Link> 
            ))
          }
        </ul>
    </div>
  )
}
