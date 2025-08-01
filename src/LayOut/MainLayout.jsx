import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Footer_2 from '../components/Footer_2'
import Top_Header_2 from '../components/Top_Header_2'
import TopHeader from '../components/TopHeader'

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname

  const isHome = path === '/'
  const isAbout = path === '/about_us'

  return (
    <div>
      {isHome || isAbout ? <TopHeader /> : <Top_Header_2 />}
      {isHome || isAbout ? <Navbar /> : <Navbar_2 />}
      <Outlet />
      {isHome ? <Footer /> : <Footer_2 />}
    </div>
  )
}

export default MainLayout
