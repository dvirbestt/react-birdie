import React from 'react';
import {BiSearch} from "react-icons/bi";

function Searchbar(props) {
    return (
        <div className={"fixed right-8 h-" +
            " w-1/3 border-2"}>

















            <div className={"bg-gray-300 flex"}><BiSearch/><input className={"bg-inherit"} type={"text"} placeholder={"Search..."}/></div>
        </div>
    );
}

export default Searchbar;