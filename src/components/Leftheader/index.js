import { withRouter } from "react-router-dom"
import "./index.css"
import {Link} from "react-router-dom"

const Leftheader=(props)=>{
    const {all, read, currentlyreading, wanttoread}= props
    const a=()=>{
        if (all==='true'){
            return(
                <p className="leftheaderpara1">All</p>
            )
        }
        else{
            return(
                <p className="leftheaderpara2">All</p>
            )
        }
    }

    const b=()=>{
        if (read==='true'){
            return(
                <p className="leftheaderpara1">Read</p>
            )
        }
        else{
            return(
                <p className="leftheaderpara2">Read</p>
            )
        }
    }

    const c=()=>{
        if (currentlyreading==='true'){
            return(
                <p className="leftheaderpara1">Currently Reading</p>
            )
        }
        else{
            return(
                <p className="leftheaderpara2">Currently Reading</p>
            )
        }
    }

    const d=()=>{
        if (wanttoread==='true'){
            return(
                <p className="leftheaderpara1">Want to Read</p>
            )
        }
        else{
            return(
                <p className="leftheaderpara2">Want to Read</p>
            )
        }
    }
    return(
        <div><h1 className="leftHeadone">Bookshelves</h1>
        <div className="leftheaderCon1">
            
            <Link className="leftheaderLink" to="/allBooks" >
                {a()}
            </Link>
            <Link className="leftheaderLink" to="/yetToReadBooks">
                {b()}
            </Link>
            <Link className="leftheaderLink" to="currentlyReadingBooks">
                {c()}
            </Link>
            <Link className="leftheaderLink" to="wantToReadBooks">
                {d()}
            </Link>
        </div>
        </div>
    )
}

export default withRouter(Leftheader)