import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
// import AboutComponent from "./components/About";
import ContactComponent from "./components/ContactUs";
import ErrorComponent from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutComponent = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userDetails, setLoggedInUser] = useState({
    loggedInUser: "Guest User"
  });

  useEffect(() => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      setLoggedInUser({
        loggedInUser: "Rohit Saini"
      });
    }, 1000);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={userDetails} updateUser={setLoggedInUser}>
        <HeaderComponent />
        <Outlet />
      </UserContext.Provider>
    </div>
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
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);