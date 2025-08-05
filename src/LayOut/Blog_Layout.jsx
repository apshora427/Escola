const BlogLayout = ({ children, sidebar }) => {
  return (
   <section className="mt-[120px]">
     <div className="container">
      <div className="grid grid-cols-[850px_1fr] gap-[30px]">
        <div>{children}</div>
        <div>{sidebar}</div>
      </div>
    </div>
   </section>
  )
}

export default BlogLayout
