import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import { ListShopPage } from './shop/pages/ListShopPage'
import { PaymentPage } from "./shop/pages/paymentPage";
import { SellPointsPage } from "./shop/pages/SellPointsPage";
import { PricingPage } from "./shop/pages/PricingPage";
import { BlogPage } from "./shop/pages/BlogPage";
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
  {
    path: "cart",
    element: <PaymentPage/>,
  },
  {
    path: ":q",
    element: <ListShopPage/>,
  },
  {
    path: "location",
    element: <SellPointsPage/>
  },
  {
    path: "pricing",
    element: <PricingPage/>
  },
  {
    path: "blog",
    element: <BlogPage/>
  }
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
