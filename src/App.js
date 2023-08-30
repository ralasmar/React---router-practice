import React from 'react'
import { Link, Route, Routes, useRoutes, NavLink } from "react-router-dom"
import { Home } from "./pages/Home"
import { BookList } from "./pages/BookList"
import { Book } from "./pages/Book"
import { NewBook } from"./pages/NewBook"
import { NotFound } from "./pages/NotFound"
import { BookLayout } from "./BookLayout"
import { BookRoutes } from './BookRoutes'
import "./styles.css"

function App() {
  // let element=useRoutes([
  //   {
  //     path:"/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ])
  return (
    <>
    {/* <Routes location="/books">
      <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}
    <nav>
      <ul>
        <li>
          {/* NavLink by default assigns class active */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink end to="/books">Books</NavLink>
        </li>
      </ul>
    </nav>
    {/* {element} */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* adding star will make the route match anything that starts with /books */}
      <Route path="/books/*" element={<BookRoutes />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </>
)}

export default App;
