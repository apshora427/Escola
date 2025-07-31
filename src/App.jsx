import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./LayOut/MainLayout"
import About_Us from "./pages/About_Us"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Service_Details from "./pages/Service_Details"
import Blog_Classic from "./pages/Blog_Classic"
import Blog_Details from "./pages/Blog_Details"
import Contact_Us from "./pages/Contact_Us"


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index={true} element={<Home/>}/> 
          <Route path="/about_us" element={<About_Us/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/service_details" element={<Service_Details/>}/>
          <Route path="/blog_classic" element={<Blog_Classic/>}/>
          <Route path="/blog_details" element={<Blog_Details/>}/>
          <Route path="/contact_us" element={<Contact_Us/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
