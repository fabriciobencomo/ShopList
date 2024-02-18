import { getCategories } from "../../helpers/getCategories"
import { Link, useParams } from "react-router-dom"
import { ListShopPage } from "../pages/ListShopPage";
import { useForm } from "../../hooks/useForm";


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
        <ul className="md:flex lg:gap-12 gap-2 justify-center hidden">
          {
            categories.map((category, id) => (
              <Link key={id} to={`/categories/${category.toLowerCase()}`}><li className={isSelected(category) ? 'bg-green-800 text-white rounded-xl p-2 shadow-md' : 'hover:bg-green-800 hover:text-white hover:rounded-xl p-2 hover:shadow-md'}>{category}</li></Link> 
            ))
          }
        </ul>
    </div>
  )
}
