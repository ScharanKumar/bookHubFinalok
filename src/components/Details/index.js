import { Component } from "react";
import "./index.css"
import Cookies from "js-cookie"
import Header from "../Header"

class Details extends Component{
    state={ loadingView: true, failureView:false, successView:false,list1:{}}
    componentDidMount(){
        this.after()
    }
    after=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const {match}=this.props
        const {params}=match
        const {id}=params
        // const id = "hgvgvh"
        console.log(id)
        const option={
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`bearer ${jwtToken}`
              },
        }
        const response=await fetch(`https://apis.ccbp.in/book-hub/books/${id}`,option)
        console.log(response)
        const data=await response.json()
        
        
        if (response.status===400){
                console.log(data)
                this.setState({failureView:true,successView:false, loadingView:false})
                
        }
        
        else{
            console.log(data)
            console.log(data.book_details)
            this.setState({list1:data.book_details,successView:true, loadingView:false,failureView:false})
        }
        // console.log(data.books)
        // this.setState({list1:data.books,successView:true})
        
    }
    failure=()=>{
        return(
            <div className="failureviewCon">
                {/* <img src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647250727/Screenshot_30_uavmge.png" alt="errorImg"/> */}
                <img src="https://res.cloudinary.com/saikrishnaboga-ccbp-tech/image/upload/v1643992995/Book-Hub%20/Group_7522failureView_xgsn7l.png" alt="errorIMG"/>
                <p className="failureviewPara">Something went wrong, Please try again.</p>
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
        const {list1}=this.state
        const {about_author, author_name, cover_pic, rating, title, about_book, read_status}=list1
        return(
            <div className="successConnot11">
                <div className="successConnot22">
                <img src={cover_pic} className="detailImagenot" alt="ImgDetail"/>
                <div>
                    <h1 className="detailHeadbook">{title}</h1>
                  <p className="detailParabook1">{author_name}</p>
                  <p className="detailParabook1">Avg Rating : {rating}</p>
                  <p className="detailParabook1">Status : <span className="detailSpan">{read_status}</span></p>
                </div>
                </div>
                
                <hr className="horizon"/>
                <div className="detailCon3">
                <h1 className="detailHeadbook">About Author</h1>
                <p className="detailParabook1">{about_author}</p>
                
                </div>
                <div className="detailCon3">
                <h1 className="detailHeadbook">About Book</h1>
                <p className="detailParabook1">{about_book}</p>
                </div>

                
                
            </div>
        )
    }
    render(){
        const {loadingView, failureView, successView} = this.state
        return(
            <div className="detailConnot1">
                <Header home="false" book="true"/>
                <div className="detailConnot2">
                        {loadingView && this.loading()}
                        {failureView && this.failure()}
                        {successView && this.success()}
                     </div>
            </div>
        )
    }
}

export default Details