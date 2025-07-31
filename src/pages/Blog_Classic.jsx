import Hero from "../components/Hero"
import BlogClassicList from "../components/BlogClassicList"
import SearchBar from "../components/Search_Here"
import RecentPosts from "../components/RecentPosts"
import CategoryList from "../components/CategoryList"
import PopularTags from "../components/PopularTags"
import BlogLayout from "../LayOut/Blog_Layout"

const Blog_Classic = () => {
  return (
    <section>
      <Hero title="Blog Classic" page="Blog Post" />
      <BlogLayout
        sidebar={
          <>
            <SearchBar />
            <RecentPosts />
            <CategoryList />
            <PopularTags />
          </>
        }
      >
        <BlogClassicList />
      </BlogLayout>
    </section>
  )
}

export default Blog_Classic
