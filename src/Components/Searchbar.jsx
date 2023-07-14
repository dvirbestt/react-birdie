import React, {useEffect, useState} from 'react';
import {BiSearch} from "react-icons/bi";

function Searchbar(props) {

    const [searchResults,setSearchResults] = useState([])
    const handleSearch = (e) => {

    }




    return (
        <div className={"fixed right-32 h-12 w-1/4 border-2 items-center justify-center bg-gray-100 rounded-full mt-1"}>
            <div className={"flex justify-center h-full items-center rounded-full"}><BiSearch className={"absolute left-2"}/><input className={"rounded-full bg-inherit w-full h-full pl-10 "} type={"text"} placeholder={"Search Birdie"}/></div>
        </div>
    );
}

export default Searchbar;