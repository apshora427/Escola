
const Service_Layout = ({ children, sidebar }) => {
    return (
        <div className="container grid grid-cols-[420px_1fr] gap-[30px] mt-[120px] mb-[130px]">
            <div>{sidebar}</div>
            <div>{children}</div>
        </div>
    )
}

export default Service_Layout