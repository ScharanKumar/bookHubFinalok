import "./index.css"
import Cookies from "js-cookie"
import { withRouter } from "react-router-dom"
import {Link} from "react-router-dom"

const Header=(props)=>{
    const {home, book}=props

    const x=()=>{
        const {home}=props
        if (home==="true"){
            return(
                <h1 className="headerHeading">Home</h1>
            )
        }
        else{
            return(
                <h1 className="headerHeading1">Home</h1>
            )
        }
    }

    const y=()=>{
        const {book}=props
        if (book==="true"){
            return(
                <h1 className="headerHeading">Bookshelves</h1>
            )
        }
        else{
            return(
                <h1 className="headerHeading1">Bookshelves</h1>
            )
        }
    }
    
    const logout=()=>{
        console.log((home))
        console.log((book))
        console.log(Boolean(home))
        console.log(Boolean(book))
        const {history}=props
        Cookies.remove("jwt_token")
        history.replace("/login")
    }
    return(
        <div className="headerCon1">
            <img src="https://res.cloudinary.com/dgbetanap/image/upload/v1711169700/Group_7731bookhubimg_nugzjy.png" alt="LoginPageBook" className="headerImage"/>
            <div className="headerCon2">
              <Link className="headerLink" to="/">
                  {x()}
              </Link>
              <Link className="headerLink" to="/allBooks">
                  {y()}
              </Link>
                <button type="button" onClick={logout} className="headerButton">Logout</button>
            </div>
        </div>
    )
}

export default withRouter(Header)