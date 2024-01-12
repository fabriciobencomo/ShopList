import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ListShopPage } from './shop/pages/ListShopPage'
import { Item } from "./shop/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListShopPage></ListShopPage>,
  },
  {
    path: "categories/:categoryName",
    element: <ListShopPage/>,
  },
]);

function ListShopApp() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default ListShopApp
