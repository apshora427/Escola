import Hero from '../components/Hero'
import Daily_Activity from '../components/Daily_Activity'
import VideoPlay from '../components/VideoPlay'
import Service_We_Offer from '../components/Service_We_Offer'
import CompanySlider_Section from '../components/CompanySlider_Section'
import GuideSection from '../components/GuideSection'
import Form_2 from '../components/Form_2'

const About_Us = () => {
  return (
    <div>
      <Hero title={"About Us"} page={"About Us"} />
      <Daily_Activity />
      <VideoPlay />
      <Service_We_Offer/>
      <CompanySlider_Section/>
      <GuideSection/>
      <Form_2/>
    </div>
  )
}

export default About_Us