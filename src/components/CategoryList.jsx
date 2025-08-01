import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Business',
    count: 3,
    path: '/blog_classic'
  },
  {
    name: 'Finance',
    count: 7,
    path: '/categories/finance'
  },
  {
    name: 'Web Design',
    count: 2,
    path: '/categories/web-design'
  },
  {
    name: 'Counseling',
    count: 3,
    path: '/categories/counseling'
  },
  {
    name: 'IT Service',
    count: 5,
    path: '/categories/it-service'
  },
];

const CategoryList = () => {
  return (
    <div className="w-[320px] mt-10">
      <h2 className="text-blue-600 text-lg font-semibold mb-1">Catagory</h2>
      <div className="h-1 w-full bg-gray-200 mb-4">
        <div className="h-1 w-16 bg-blue-600"></div>
      </div>

      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li key={index}>
            <Link
              to={cat.path}
              className="flex justify-between items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 rounded-md transition"
            >
              <span>{cat.name}</span>
              <span className="bg-white text-gray-700 px-2 py-0.5 text-sm rounded border">
                {cat.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
