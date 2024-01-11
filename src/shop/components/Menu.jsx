import { getCategories } from "../../helpers/getCategories"

export const Menu = () => {
  const categories = getCategories()
  return (
    <div className="mt-12 mx-auto">
        <ul className="flex gap-12 justify-center">
          {
            categories.map(category => (
              <li className="hover:bg-green-800 hover:text-white hover:rounded-xl p-2 hover:shadow-md">{category}</li>
            ))
          }
        </ul>
    </div>
  )
}
