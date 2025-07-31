import ExpertCard from "./ExpertCard";
import Expert_1 from '../assets/Expert_1.png'
import Expert_2 from '../assets/Expert_2.png'
import Expert_3 from '../assets/Expert_3.png'

const expertData = [
  {
    name: "Bessie Cooper",
    department: "Software Department",
    image: Expert_1,
  },
  {
    name: "Devon Lane",
    department: "Marketing Department",
    image: Expert_2,
  },
  {
    name: "Darrell Steward",
    department: "IT Department",
    image: Expert_3,
  },
  {
    name: "Bessie Cooper",
    department: "Software Department",
    image: Expert_1,
  },
];

const ExpertSection = () => {
  return (
    <section className="py-[120px] px-[16px] bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-[420px_1fr]">
          <div>
            <p className="font-Inter font-bold text-[18px] leading-[31.5px] text-P mb-[15px]">
              Meet Our Expert
            </p>
            <h1 className="font-Inter text-[42px] leading-[54px] font-bold text-900 mb-[15px]">
              Your Partner In
              <span className="text-P"> Digital</span> Success
            </h1>
            <p className="text-900 w-[374px]">
              Ecology is crucial for our understanding of the natural world, and is
              becoming The goal of understand ecology
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {expertData.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
