import React from 'react'
import Navbar from './components/navbar'
import HomePage from './components/homePage.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router';
import Allcourses from './components/allcourses';
import Layout from './components/layout';
import HowItWorks from './page/howitworks';
import AllCategories from './page/Allcategory';
import CourseDetails from './page/courseDetails';


function App() {


  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path:"/",element:<HomePage/>},
        {path:"/allcourses",element:<Allcourses/>},
        {path:'/allcategory',element:<AllCategories/>},
        {path:"/demoVideos",element:""},
        {path:"/courseCategories",element:""},
        {path:'/howitworks',element:<HowItWorks/>},
        {path:"/courses/:id",element:<CourseDetails />}
      ]
    }
  ])







  return (
    <>
     
     <RouterProvider router={router}/>

    


    </>
  )
}

export default App