import './App.css'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
import Users from './components/Users'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="users/:id" element={<Users/>} />
        <Route path="github" element={<Github/>} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
  )
}

export default App
