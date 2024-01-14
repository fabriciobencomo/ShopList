import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ListShopPage } from './shop/pages/ListShopPage'
import { Item } from "./shop/components";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
      <Provider store={store}> 
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  )
}

export default ListShopApp
