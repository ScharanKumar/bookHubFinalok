import { Component } from "react";
import Header from "../Header"
import "./index.css"
import Leftheader from "../Leftheader"
import Cookies from "js-cookie"
import BookItem from "../BookItem"

class Allbooks extends Component{
    state={ loadingView: true, failureView:false, successView:false, list1:[],search:"",there:false}
    componentDidMount(){
        this.after("")
    }
    y=(event)=>{
        // this.setState({search:event.target.value})
        this.after(event.target.value)
    }
    after=async(s)=>{
        const jwtToken=Cookies.get("jwt_token")
        // const {search}=this.state
        // let s="fv"
        const option={
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`bearer ${jwtToken}`
              },
        }
        const response=await fetch(`https://apis.ccbp.in/book-hub/books?shelf=ALL&search=${s}`,option)
        console.log(response)
        const data=await response.json()
        if (data.books.length===0){
            console.log(data)
            this.setState({failureView:true,successView:false, loadingView:false,search:s})
            
    }
    
    else{
        console.log(data)
        console.log(data.books)
        this.setState({list1:data.books,there:true,successView:true,search:s, loadingView:false,failureView:false})
    }
        
    }
    failure=()=>{
        const {search}=this.state
        return(
            <div className="failureviewCon">
                {/* <img src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647250727/Screenshot_30_uavmge.png" alt="errorImg"/> */}
                <img src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647250727/Screenshot_30_uavmge.png" alt="errorIMG"/>
                <p className="failureviewPara">Your search for {search} did not find any matches.</p>
                <button type="button" className="headerButton">Try again</button>
                {/* <img src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645183805/Notfound_2_lyiwc7.png" alt="Img"/> */}
            </div>
        )
    }
    loading=()=>{
        return(
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }
    success=()=>{
        const {list1,there}=this.state
        return(
            <div>
            {there &&  <ul className="successCon1">
                {list1.map(every=>
                    (<BookItem details={every} key={every.id}/>)
                )}
            </ul>}
            </div>
            
        )
    }
    render(){
        const {loadingView, failureView, successView} = this.state
        return(
            <div className="allbooksCon1">
                <Header home="false" book="true"/>
                <div className="allbooksCon2">
                    <Leftheader all="true" read="false" wanttoread="false" currentlyreading="false"/>
                     <div className="allbooksCon3">
                        <div className="allbooksCon4">
                            <h1 className="headok">All Books</h1>
                            <input onChange={this.y} type="text" className="allbooksInput" placeholder="Search"/>
                        </div>
                        {loadingView && this.loading()}
                        {failureView && this.failure()}
                        {successView && this.success()}
                     </div>
                </div>
            </div>
        )
    }
}

export default Allbooks