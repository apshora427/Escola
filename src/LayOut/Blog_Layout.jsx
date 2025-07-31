const BlogLayout = ({ children, sidebar }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-[850px_1fr] gap-[24px]">
        <div>{children}</div>
        <div>{sidebar}</div>
      </div>
    </div>
  )
}

export default BlogLayout
