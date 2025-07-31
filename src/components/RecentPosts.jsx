import Recent_Img_1 from '../assets/recent_img_1.png'
import Recent_Img_2 from '../assets/recent_img_2.png'
import Recent_Img_3 from '../assets/recent_img_3.png'

const post_items = [
  {
    id: 1,
    img: Recent_Img_1,
    title: 'The Benefits of Education: A Guide for Students',
    date: '20 Aug,2022',
  },
  {
    id: 2,
    img: Recent_Img_2,
    title: 'Exploring the Impact of Education: A Compre Guide',
    date: '20 Aug,2022',
  },
  {
    id: 3,
    img: Recent_Img_3,
    title: 'Unlocking the Power of Education: A ComprehensiLook',
    date: '20 Aug,2022',
  },
  {
    id: 4,
    img: Recent_Img_1,
    title: 'The Benefits of Education: A Guide for Students',
    date: '20 Aug,2025',
  },
]

const RecentPosts = () => {
  return (
    <section id="RecentPosts">
      <div className="border rounded-md p-4 w-full max-w-md bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
        <div className="h-0.5 w-16 bg-blue-500 mb-4 rounded"></div>
        <div className="flex flex-col gap-4">
          {post_items.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts

const Card = ({ img, title, date }) => {
  return (
    <div className="flex gap-4 items-start">
      <img
        src={img}
        alt="recent-post"
        className="w-12 h-12 rounded-md bg-gray-200 object-cover"
      />
      <div>
        <h5 className="text-sm font-medium text-gray-800 leading-snug">
          {title}
        </h5>
        <p className="text-xs text-gray-500 mt-1">• {date}</p>
      </div>
    </div>
  )
}
