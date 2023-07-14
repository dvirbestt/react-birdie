import React, {useState} from 'react';
import {FcGoogle} from "react-icons/fc";
import test from "../assets/test.png"
import axios from "axios";
import {useNavigate} from "react-router";
import APIResponses from "./APIResponses.jsx";
function Signup(props) {

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(null)

    const signup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post("http://localhost:3000/users/Signup",{
            "user" : {
                firstName : formData.get("firstName"),
                lastName : formData.get("lastName"),
                userName : formData.get("userName"),
                password : formData.get("password"),
                email : formData.get("email"),
            }
        }).then((res)=> {
            const data = res.data
            if (res.status === 200){
                // eslint-disable-next-line react/prop-types
                props.setSignup(false);
            }
        }).catch((e)=> {
            setError(e)
        })
    }



    return (
        <>
        {error !== null? <APIResponses res={error}/> : <></>}

        <div className={"flex gap-10"}>
            <img src={test} className={"w-8/12 "}/>
            <form onSubmit={signup} className={"flex flex-col items-center gap-2 justify-center"}>
                <h2 className={"font-bold text-3xl mb-5 mt-5"}>Signup</h2>
                <div className={"flex gap-2"}>
                    <div>
                        <label className={""}>First Name</label>
                        <input name={"firstName"}
                               className={" rounded h-10 p-3 border-2 w-36 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"}
                               type={"text"}/>

                    </div>
                    <div>
                        <label className={""}>Last Name</label>
                        <input name={"lastName"}
                               className={" rounded h-10 p-3 border-2 w-36 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"}
                               type={"text"}/>

                    </div>
                </div>
                <div>
                    <label className={""}>Username</label>
                    <input name={"userName"} className={" rounded h-10 p-3 border-2 w-72 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"} type={"text"}/>

                </div>
                <div>
                    <label className={""}>Password</label>
                    <input name={"password"} className={" rounded h-10 p-3 border-2 w-72 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"} type={"password"}/>

                </div>
                <div>
                    <label className={""}>Email</label>
                    <input name={"email"} className={" rounded h-10 p-3 border-2 w-72 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"} type={"text"}/>

                </div>
                <button className={"mt-5 h-10 hover:bg-black hover:text-white  transition duration-300 border-l-2 border-r-2 border-black w-56"} type={"submit"}>Sign Up</button>
                {/* eslint-disable-next-line react/prop-types */}
                <div onClick={()=> props.setSignup(false)} className={"text-blue-600 mt-5 hover:cursor-pointer"}>Already Signed Up? Click Here!</div>
                <div className={"flex h-8 items-center justify-center p-5 gap-4 border-2 rounded hover:cursor-pointer" }>Login With Google <FcGoogle size={30}/></div>
            </form>
        </div>
        </>
    );
}

export default Signup;