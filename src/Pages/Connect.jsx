import React, {useState} from 'react';
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";

function Connect(props) {

    const [signup,setSignup] = useState(false)


    return (
        <div>
            {!signup ? <Login setSignup={setSignup}/> : <Signup setSignup={setSignup}/>}
        </div>
    );
}

export default Connect;
