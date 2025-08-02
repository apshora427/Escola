
import Hero from '../components/Hero';
import SearchBar from '../components/Search_Here';
import RecentPosts from '../components/RecentPosts';
import CategoryList from '../components/CategoryList';
import PopularTags from '../components/PopularTags';
import Impact_of_Education from '../components/Impact_of_Education'
import BlogLayout from '../LayOut/Blog_Layout';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Blog_Details = () => {
  return (
    <div>
      <Hero title="Blog Details" page="Blog Details" />
      <BlogLayout
        children={<Impact_of_Education/>}
        sidebar={
          <>
            <SearchBar />
            <RecentPosts />
            <CategoryList />
            <PopularTags />
          </>
        }
      />
      <ScrollToTopButton/>
    </div>
  );
};

export default Blog_Details;
