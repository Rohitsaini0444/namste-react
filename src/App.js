import React, { lazy, Suspense, useState, useEffect } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
// import AboutComponent from "./components/About";
import ContactComponent from "./components/ContactUs";
import ErrorComponent from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "../utils/store/appStore";
import UserContext from "../utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutComponent = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setLoggedInUser] = useState("Guest User");

  useEffect(() => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      setLoggedInUser("Rohit Saini");
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: userName, updateUser: setLoggedInUser}}>
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      },
      {
        path: "/about",
        element: <Suspense fallback="Loading...">
          <AboutComponent />
        </Suspense>
      },
      {
        path: "/contact",
        element: <ContactComponent />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback="Loading...">
          <Grocery />
        </Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}><RouterProvider router={appRouter} /></Provider>);