import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import Portfolio from "./Portfolio"
import Ambitions from "./pages/Ambitions"
import Hobbies from "./pages/Hobbies"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Portfolio />}/>
    <Route path="/ambitions" element={<Ambitions />}/>
    <Route path="/hobbies" element={<Hobbies />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/Skills" element={<Skills />}/>
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
