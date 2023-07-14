import React from 'react';
import {connect} from "react-redux";
import {BsTwitter} from "react-icons/bs";
import {BiBell, BiBookmark, BiSearch, BiSolidHomeCircle} from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import {RiFileListLine} from "react-icons/ri";
import {LuVerified} from "react-icons/lu";
import {FiUser} from "react-icons/fi";
import {CgMoreO} from "react-icons/cg";
import {SiPostman} from "react-icons/si";


function Navbar(props) {
    return (
        <div className={"flex flex-col items-baseline justify-center h-screen border-r-2 pl-7 pr-7 fixed w-1/4 "}>
            <div className={"flex flex-col p-10 items-baseline w-full gap-3"}>
            <div className={"navbar-button"}><BsTwitter color={"208cff"} size={"2em"}/></div>
            <div className={"navbar-button"}> <BiSolidHomeCircle size={"2em"}/><p>Home</p></div>
            <div className={"navbar-button"}><BiSearch size={"2em"}/><p>Explore</p></div>
            <div className={"navbar-button"}><BiBell size={"2em"}/> <p>Notifications</p></div>
            <div className={"navbar-button"}><HiOutlineMail size={"2em"}/><p>Messages</p> </div>
            <div className={"navbar-button"}><RiFileListLine size={"2em"}/> <p>Lists</p></div>
            <div className={"navbar-button"}><BiBookmark size={"2em"}/><p>Bookmarks</p> </div>
            <div className={"navbar-button"}><LuVerified size={"2em"}/><p>Verified</p> </div>
            <div className={"navbar-button"}> <FiUser size={"2em"}/><p>Profile</p></div>
            <div className={"navbar-button"}><CgMoreO size={"2em"}/> <p>More</p></div>
            <div className={"gap-2 items-center justify-center flex cursor-pointer  transition-all duration-300 bg-blue-500 font-bold text-lg text-white w-full h-10 rounded-3xl "}> Tweet </div>
        </div>
            {/* eslint-disable-next-line react/prop-types */}
            <div className={"flex gap-3 h-full justify-center  items-center mb-3 pl-7"}>
                <div className={" flex justify-center basis-2/5 items-center uppercase text-center bg-blue-400 rounded-full p-2 w-16 text-4xl cursor-pointer "}>{props.user.userName[0]}</div>
                <div className={"flex flex-col"}>
                    <div>{props.user.firstName} {props.user.lastName}</div>
                    <div className={"text-gray-500"}>@{props.user.userName}</div>

                </div>
            </div>
        </div>
    );
}

function mapPropsToState(state){
    return {
        user : state.user,
        token : state.token
    }
}

export default connect(mapPropsToState)(Navbar);