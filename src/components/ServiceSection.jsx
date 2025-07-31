import React from 'react';
import ServiceCard from './ServiceCard';
import service_img_1 from '../assets/service_img_1.png';
import service_img_2 from '../assets/service_img_2.png';
import service_img_3 from '../assets/service_img_3.png';
import service_img_4 from '../assets/service_img_4.png';

const services = [
  {
    icon: service_img_1,
    title: 'Future Focus',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
    bgColor: 'bg-[#FFE2DC]',
  },
  {
    icon: service_img_2,
    title: 'Smart Scholars',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
    bgColor: 'bg-[#DFF6F4]',
  },
  {
    icon: service_img_3,
    title: 'Knowledge Hub',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
    bgColor: 'bg-[#FFF9D8]',
  },
  {
    icon: service_img_4,
    title: 'Learning Pathways',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
    bgColor: 'bg-[#F4EEFF]',
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services?.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
