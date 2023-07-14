import React, {useEffect} from 'react';
import Navbar from "../Components/Navbar.jsx";
import Feed from "../Components/Feed.jsx";
import SubHeader from "../Components/SubHeader.jsx";
import Searchbar from "../Components/Searchbar.jsx";
import AddPost from "../Components/AddPost.jsx";

function HomePage(props) {

    useEffect(() => {

            document.title = "Home / Birdie"

    }, []);


    return (
        <div className={"flex w-screen"}>
            <Navbar currentLocation={"Home"}/>
            <SubHeader currentLocation={"Home"} />
            <Searchbar/>
            <div className={"flex flex-col"}>
                <AddPost/>
                <Feed/>
            </div>




        </div>
    );
}

export default HomePage;