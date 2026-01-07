const Cards = ({id , image , title}) => {
    return(

            <div key={id} className="min-w-50 h-60  bg-white  rounded-md  ">
                <img src={image} className="min-w-40 h-40 m-4 bg-white object-cover rounded" alt="" />
            <h1 className="text-black  m-3 text-center truncate">{title}</h1>
            </div>

    )
}
export default Cards