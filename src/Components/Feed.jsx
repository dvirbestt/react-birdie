import React, {useEffect, useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";


function Feed(props) {

    const [loading,setLoading] = useState(true);
    const [feed,setFeed] = useState([])

    useEffect(() => {
        axios.post("http://localhost:3000/Posts/getPosts",{},{headers : {
            "Authorization" : `Bearer ${props.token}`
            }}).then((res)=> {
            setFeed(res.data.data);
        })
    }, []);


    return (
        <div className={"w-2/5 mt-60 flex flex-col gap-3 absolute left-1/4" }>

            {feed?.map((post,i)=> (
                <div key={i} className={"flex flex-col border-b-2 border-r-2 p-4"}>
                    <div className={"flex items-center gap-5"}><div className={"w-14 h-14 rounded-full bg-gray-100"}></div><h3 className={"font-bold"}>{post.ownerName}</h3></div>
                    <div className={"m-auto mt-5"}>{post.content}</div>
                </div>
            ))}


        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user,
        token : state.token
    }
}

export default connect(mapStateToProps)(Feed);