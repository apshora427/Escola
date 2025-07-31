import Blog_Article_Card from "./Blog_Article_Card";
import img_1 from '../assets/Blog_Article_1.png'
import img_2 from '../assets/Blog_Article_2.png'
import img_3 from '../assets/Blog_Article_3.png'
import MainButton from "./MainButton";
import Heading from "./Heading";

const blogArticles = [
  {
    image: img_1,
    category: "Category",
    comments: "05",
    title: "Empowering Your Business For Growth",
  },
  {
    image: img_2,
    category: "Category",
    comments: "01",
    title: "Hard Work Always Brings You Success",
  },
  {
    image: img_3,
    category: "Category",
    comments: "02",
    title: "Results-Driven Consulting At Its Finest",
  },
];

const Blog_Article_Section = () => {
  return (
    <section className="mt-[109px] mb-[120px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-[1fr_500px] gap-[200px] mb-[50px]">
            <div>
              <Heading
                section={"Latest news"}
                heading={"Transforming your vision into reality"}
              />
            </div>
            <div>
              <MainButton
                bgColor="bg-white"
                textColor="text-black"
                hoverBgColor="bg-blue-500"
                hoverTextColor="text-white"
                className={"border-[2px] border-P"}
                children={"More Blogs"}
              />
            </div>
          </div>
          <div className="grid grid-cols-3">
            {blogArticles.map((article, index) => (
              <Blog_Article_Card key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog_Article_Section;
