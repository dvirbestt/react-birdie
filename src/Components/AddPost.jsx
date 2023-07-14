import React from 'react';
import {connect} from "react-redux";

function AddPost(props) {
    return (
        <div className={"w-2/5 left-1/4 mt-28 h-32 flex flex-col border-b-2 border-r-2 absolute"}>
            <div>  </div>
        </div>
    );
}



function mapPropsToState(state){
    return {
        user: state.user,
        token : state.token
    }
}
export default connect(mapPropsToState)(AddPost);