import { Component } from "react"
import Header from "../Header"
import "./index.css"
import Cookies from "js-cookie"
import BookItem1 from "../BookItem1"

class Home extends Component{
    state={loading:true, success:false,list:[]}
    componentDidMount(){
        this.after()
    }
    after=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const option={
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`bearer ${jwtToken}`
              },
        }
        const response=await fetch("https://apis.ccbp.in/book-hub/top-rated-books",option)
        console.log(response)
        const data=await response.json()
        console.log(data.books)
        this.setState({list:data.books,success:true, loading:false})
    }
    success=()=>{
        const {list}=this.state
        return(
            <ul className="successConhome">
                {list.map(every=>
                    (<BookItem1 details={every} key={every.id}/>)
                )}
            </ul>
        )
    }
    render(){
        const {loading, success} = this.state
        return(
            <div className="homeCon1">
                <Header home="true" book="false"/>
                <div className="homeCon2">
                    <h1 className="homeHead">Find Your Next Favorite Books?</h1>
                    <p className="homePara">You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you 
                        <br/>surprisingly insightful recommendations.
                    </p>
                    <div className="homeCon3">
                          <h1>Top rated Books</h1>
                          {loading && <h1>Loading.....</h1>}
                          {success && this.success()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home