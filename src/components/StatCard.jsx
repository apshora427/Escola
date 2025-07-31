import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon, number, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const match = number.match(/^(\d+)([a-zA-Z+]+)?$/);
  const countTo = match ? parseInt(match[1], 10) : 0;
  const suffix = match?.[2] || "";

  return (
    <div
      ref={ref}
      className="bg-[#f5f8fc] px-[70px] py-[25px] rounded-lg flex  gap-4 w-full max-w-[370px]"
    >
      <div className="bg-green-500 text-white size-[64px] flex justify-center items-center rounded-full text-xl">
        <img src={icon} alt='icon' />
      </div>
      <div>
        <h3 className="font-Inter font-bold text-[42px] leading-[54px] text-P">
          {inView ? <CountUp end={countTo} duration={2} /> : 0}
          {suffix}
        </h3>
        <p className="font-Inter font-medium text-[21px] leading-[31px]">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
