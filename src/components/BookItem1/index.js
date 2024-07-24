import "./index.css"
import {Link} from "react-router-dom"
const BookItem1=(props)=>{
    const {details}=props
    const {id, author_name, cover_pic, title }=details
    return(
        <Link className="linkBookItem bookItemCon11" to={`/detail/home/${id}`}>
        
            <img className="bookItemImg1" alt="BookImg" src={cover_pic}/>
            <div className="bookItemCon22">
            <h1 className="bookItemhead11">{title}</h1>
            <p className="paraBookitem11">{author_name}</p>
            {/* <p className="paraBookitem2">Avg Rating : {rating}</p>
            <p className="paraBookitem2">Status : <span className="spanBookItem1">{read_status}</span></p> */}
            </div>
            
            
        
        </Link>
        
    )
}

export default BookItem1