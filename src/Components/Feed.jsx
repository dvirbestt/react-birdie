import React, {useEffect, useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import PostCard from "./PostCard.jsx";
import {useNavigate} from "react-router";


function Feed(props) {

    const [loading,setLoading] = useState(true);
    const [feed,setFeed] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        axios.post("http://localhost:3000/Posts/getPosts",{},{headers : {
            "Authorization" : `Bearer ${props.token}`
            }}).then((res)=> {
                setFeed(res.data.data)
        }).catch((res)=> {
            if (res.response.status === 403){
                navigate("/")
            }
        })
    }, []);


    return (
        <div className={"w-2/5 mt-80 flex flex-col absolute left-1/4" }>

            {feed.map((post,i)=> (
                <PostCard post={post} key={i}/>
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