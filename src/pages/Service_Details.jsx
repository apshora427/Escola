import Hero from '../components/Hero';
import PowerOfEducation from '../components/PowerOfEducation';
import CategoryBrochureSection from '../components/CategoryBrochureSection';
import Service_Layout from '../LayOut/Service_Layout';

const Service_Details = () => {
  return (
    <div>
      <Hero title="Service Details" page="Service Details" />
      <Service_Layout
        sidebar={<CategoryBrochureSection />}
        children={<PowerOfEducation />}
      />
    </div>
  );
};

export default Service_Details;
