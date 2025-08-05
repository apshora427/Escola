import BlogClassicCard from './BlogClassicCard'

import Blog_Classic_1 from '../assets/Blog_Classic_1.png'
import Blog_Classic_2 from '../assets/Blog_Classic_2.png'
import Blog_Classic_3 from '../assets/Blog_Classic_3.png'

const blog_items = [
  {
    id: 1,
    img: Blog_Classic_1,
    title: 'Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions',
    date: 'October 19, 2023',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper',
  },
  {
    id: 2,
    img: Blog_Classic_2,
    title: 'Educating for Success: A Guide to Achieving Your Goals',
    date: 'October 18, 2023',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper',
  },
  {
    id: 3,
    img: Blog_Classic_3,
    title: 'Unlocking Your Potential: A Guide to Achieving Your Dreams',
    date: 'October 17, 2023',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper',
  },
]

const BlogClassicList = () => {
  return (
    <section id="BlogClassic">
      <div className="">
        <div className='flex flex-col gap-[30px]'>
          {blog_items?.map((item) => (
            <BlogClassicCard
              key={item.id}
              img={item.img}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogClassicList
