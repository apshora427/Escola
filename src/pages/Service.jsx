import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import NewsletterSection from '../components/NewsletterSection'
import NavigateYourPath_Section from '../components/NavigateYourPath_Section'
import Form_2 from '../components/Form_2'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Service = () => {
  return (
    <div>
      <Hero title="Service" page="Service" />
      <ServiceSection />
      <NavigateYourPath_Section />
      <NewsletterSection />
      <Form_2 />
      <ScrollToTopButton/>
    </div>
  );
};


export default Service