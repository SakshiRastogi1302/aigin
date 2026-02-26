import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BodyComponent from "./components/BodyComponent"
import ErrorComponent from "./components/ErrorComponent"
import HomePageComponent from "./components/HomePageComponent"
import AiginRoyal from "./components/AiginRoyal"
import AiginRoyalParkComponent from "./components/AiginRoyalParkComponent"
import AboutComponent from "./components/AboutComponent"
import TowerAComponent from "./components/TowerAComponent"
import TowerBComponent from "./components/TowerBComponent"
import TilesComponent from "./components/TilesComponent"

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<BodyComponent />,
      children:[
        {
          path:"/",
          element:<HomePageComponent />
        },
        {
          path:"/about",
          element:<AboutComponent />
        },
        {
          path:"/aigin-royal",
          element:<AiginRoyal />,
          children:[
            {
              path:"/aigin-royal/towerA",
              element:<TowerAComponent />,
              children:[
                {
                  path:"/aigin-royal/towerA/tiles",
                  element:<TilesComponent />
                }
              ]
            },
            {
              path:"/aigin-royal/towerB",
              element:<TowerBComponent />
            }
          ]
        },
        {
          path:"/aigin-royal-park",
          element:<AiginRoyalParkComponent />,
          children:[
            {
              path:"/aigin-royal-park/towerA",
              element:<TowerAComponent />,
              children:[
                {
                  path:"/aigin-royal-park/towerA/tiles",
                  element:<TilesComponent />
                }
              ]
            },
            {
              path:"/aigin-royal-park/towerB",
              element:<TowerBComponent />
            }
          ]
        },
      ],
      errorElement:<ErrorComponent />
    },

])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
