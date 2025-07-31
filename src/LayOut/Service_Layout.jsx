
const Service_Layout = ({children, sidebar}) => {
    return (
        <div className="container grid grid-cols-[1fr_410px] gap-[30px]">
            <div>{children}</div>
            <div>{sidebar}</div>
        </div>
    )
}

export default Service_Layout