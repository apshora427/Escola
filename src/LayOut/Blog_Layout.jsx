const BlogLayout = ({ children, sidebar }) => {
  return (
    <div className="">
      <div className="grid grid-cols-[850px_1fr]">
        <div>{children}</div>
        <div>{sidebar}</div>
      </div>
    </div>
  )
}

export default BlogLayout
