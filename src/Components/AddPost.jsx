import React, {useState} from 'react';
import {connect} from "react-redux";
import {BiImage, BiSolidImageAdd} from "react-icons/bi";
import axios from "axios";

function AddPost(props) {

    const post = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (formData.get("text") === " " || formData.get("text") === "" ){
            return
        }

        axios.post("http://localhost:3000/Posts/addPost",{
            post : {
                content : {
                    text : formData.get("text")
                }
            }
        },{headers : {
            "Authorization" : `Bearer ${props.token}`
            }}).then((res)=> {

        })

    }



    return (
        <form onSubmit={(e)=> post(e)} className={" p-5 w-2/5 left-1/4 mt-28 h-52 flex flex-col border-b-2 border-r-2 absolute"}>
            <div className={"flex gap-2 basis-4/5"}>
                <div className={"w-14 h-14 rounded-full bg-gray-100"}></div>
                <textarea name={"text"} className={"w-96 h-full p-5 bg-gray-100 rounded"} type={"text"} placeholder={"What's on your mind"}/>
            </div>
            <div className={"flex justify-end mt-5"}>
                <button type={"submit"} className={"bg-blue-500 rounded-full w-24 h-8 text-white font-bold"}>Post</button>
            </div>
        </form>
    );
}



function mapPropsToState(state){
    return {
        user: state.user,
        token : state.token
    }
}
export default connect(mapPropsToState)(AddPost);