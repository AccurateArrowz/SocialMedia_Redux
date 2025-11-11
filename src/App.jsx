import { lazy } from 'react';
import './App.css'
import PostList from './features/Posts/PostList'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  // const PostList = lazy(()=> import ('./features/Posts/PostList'))

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
