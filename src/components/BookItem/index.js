import "./index.css"
import {Link} from "react-router-dom"
const BookItem=(props)=>{
    const {details}=props
    const {id, author_name, cover_pic, rating, read_status, title }=details
    return(
        <Link className="linkBookItem bookItemCon1" to={`/detail/${id}`}>
        
            <img className="bookItemImg" alt="BookImg" src={cover_pic}/>
            <div className="bookItemCon2">
            <h1 className="bookItemhead1">{title}</h1>
            <p className="paraBookitem1">{author_name}</p>
            <p className="paraBookitem2">Avg Rating : {rating}</p>
            <p className="paraBookitem2">Status : <span className="spanBookItem1">{read_status}</span></p>
            </div>
            
            
        
        </Link>
        
    )
}

export default BookItem