import React, {useEffect, useState} from 'react';
import {AiFillAlert, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import pic from "../assets/default.jpg"
import {connect} from "react-redux";
import axios from "axios";
import {SlOptions, SlOptionsVertical} from "react-icons/sl";




function PostCard(props) {

    const [liked,setLiked] = useState(props.post.likes.indexOf(props.user._id) !== -1)

    const [formattedDate,setFormattedDate] = useState([])
    const [formattedTime,setFormattedTime] = useState([])
    // eslint-disable-next-line react/prop-types
    const [thisPost,setThisPost] = useState(props.post);
    const [profilePic,setProfilePic] = useState(null);




    useEffect(()=>{
        setFormattedTime(props.post.timeCreated.split("T")[1].split(":"))
        setFormattedDate(props.post.timeCreated.split("T")[0].split("-"))


    },[])



    const like = () => {

        if (thisPost.likes.indexOf(props.user._id) === -1){

            axios.post("http://localhost:3000/Posts/like",{
                post : {
                    _id : thisPost._id
                }
            },{headers : {
                "Authorization" : `Bearer ${props.token}`
                }}).then((res)=> {
                setLiked(true)
                setThisPost(res.data.post)

            }).catch((e)=> {

            })
        }
    }



    const unlike = () => {

        axios.post("http://localhost:3000/Posts/unlike",{post : {
            _id : thisPost._id
            }},{headers : {
                "Authorization" : `Bearer ${props.token}`
            }}).then((res)=> {
            setThisPost(res.data.post)
            setLiked(false)
        })
    }

    return (
        <div className={"flex border-b-2 border-r-2 hover:bg-gray-100 cursor-pointer transition-all ease-in-out "}>
        <div  className={"flex flex-col  p-5 gap-3 basis-11/12"}>
            <div className={"flex items-center gap-5"}>
                <div className={"w-8 h-8 rounded-full bg-gray-100"}>
                    {profilePic === null ? <img src={pic} className={"w-8 h-8 rounded-full"}/> : <></>}
                </div>
                <h3 className={"font-bold hover:underline"}>{thisPost.ownerName}</h3>
            </div>
            <div className={"text-gray-500 text-sm"}>{formattedDate[2]}-{formattedDate[1]}-{formattedDate[0]} {formattedTime[0]}:{formattedTime[1]}</div>
            <div className={" mt-5 p-5 rounded-lg"}>{thisPost.content.text}</div>
            <div className={"flex flex-col items-start"}>
                <div className={"cursor-pointer flex flex-col justify-center items-center text-center hover:text-pink-500 "}>
                    {!liked  ?
                        <div className={"w-10 h-10 hover:bg-pink-200 rounded-full flex justify-center items-center "}><AiOutlineHeart onClick={like}  size={30}/></div>
                        :
                        <div className={"w-10 h-10 hover:bg-pink-200 rounded-full flex justify-center items-center "}><AiFillHeart onClick={unlike} color={"red"}  size={30}/></div> }
                    <div className={"text-sm font-bold"}>{thisPost.likes.length}</div>
                </div>
            </div>
        </div>
            <div className={"mt-5 flex items-center justify-center cursor-pointer text-center w-8 h-8 rounded-full hover:bg-blue-100 hover:text-blue-500"}><SlOptions/></div>
        </div>
    );
}


function mapPropsToState(state){
    return {
        user : state.user,
        token : state.token
    }
}
export default connect(mapPropsToState)(PostCard);