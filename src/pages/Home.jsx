import Banner from '../components/Banner'
import Blog_Article_Section from '../components/Blog_Article_Section'
import CompanySlider_Section from '../components/CompanySlider_Section'
import Courses from '../components/Courses.'
import ExpertSection from '../components/ExperSection'
import From_1 from '../components/From_1'
import FutureGeneration from '../components/FutureGenaration'
import GuideSection from '../components/GuideSection'
import MainButton from '../components/MainButton'
import NewsletterSection from '../components/NewsletterSection'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Service_We_Offer from '../components/Service_We_Offer'
import Top_Parse_Section from '../components/Top_Parse'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Courses />
      <Service_We_Offer />
      <Top_Parse_Section/>
      <FutureGeneration />
      <NewsletterSection />
      <ExpertSection />
      <CompanySlider_Section />
      <GuideSection />
      <From_1/>
      <Blog_Article_Section />
      <ScrollToTopButton/>
    </div>
  )
}

export default Home