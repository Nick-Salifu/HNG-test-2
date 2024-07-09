import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/cartpage', element: <CartPage />},
    {path: '/checkoutpage', element: <CheckoutPage />},
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
