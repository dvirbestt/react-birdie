import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Feed from "../Components/Feed.jsx";

function HomePage(props) {
    return (
        <div className={"flex"}>
            <Navbar/>
            <Feed/>
        </div>
    );
}

export default HomePage;