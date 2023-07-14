import React, {useEffect} from 'react';
import Navbar from "../Components/Navbar.jsx";
import Feed from "../Components/Feed.jsx";
import SubHeader from "../Components/SubHeader.jsx";
import Searchbar from "../Components/Searchbar.jsx";

function HomePage(props) {

    useEffect(() => {

            document.title = "Home / Birdie"

    }, []);


    return (
        <div className={"flex w-screen"}>
            <Navbar/>
            <div>
                <SubHeader currentLocation={"Home"} />
                <Feed/>
                <Searchbar/>
            </div>

        </div>
    );
}

export default HomePage;