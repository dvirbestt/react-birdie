import React, {useEffect} from 'react';
import Navbar from "../Components/Navbar.jsx";
import SubHeader from "../Components/SubHeader.jsx";
import Feed from "../Components/Feed.jsx";
import Searchbar from "../Components/Searchbar.jsx";

function Explore(props) {

    useEffect(() => {
        document.title = "Explore | Birdie"
    }, []);


    return (
        <div className={"flex w-full"}>
            <Navbar currentLocation={"Explore"}/>
            <SubHeader currentLocation={"Explore"} />
            <Feed/>
            <Searchbar/>
        </div>
    );
}

export default Explore;