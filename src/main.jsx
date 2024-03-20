import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './components/contact/Contact.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/users/user/userDetails/UserDetail.jsx';
import Posts from './posts/Posts.jsx';
import PostDetails from './components/post/postDetails/PostDetails.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${[params.userId]}`) ,
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
    
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
 {/* <App></App> */}
  </React.StrictMode>,
)
