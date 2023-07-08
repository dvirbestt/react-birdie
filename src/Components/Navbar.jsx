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
        <div className={"flex flex-col items-center mt-1 gap-0.5 h-screen "}>

            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><BsTwitter color={"208cff"} size={14} /></div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}> <BiSolidHomeCircle size={12}/></div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><BiSearch size={12}/></div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><BiBell size={12}/></div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><HiOutlineMail size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><RiFileListLine size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><BiBookmark size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><LuVerified size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}> <FiUser size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer hover:bg-gray-200 transition-all duration-200 w-5 h-5 rounded-full"}><CgMoreO size={12}/> </div>
            <div className={"items-center justify-center flex cursor-pointer  transition-all duration-300 w-5 h-5 rounded-full"}><SiPostman size={24}/> </div>

            {/* eslint-disable-next-line react/prop-types */}
            <div className={"mt-20 uppercase text-center bg-blue-400 rounded-full w-5 text-sm cursor-pointer"}>{props.user.userName[0]}</div>

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