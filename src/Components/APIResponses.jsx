import React from 'react';

function ApiResponses(props) {



    return (
        // eslint-disable-next-line react/prop-types
        <div>{props?.res?.status === 400 ?
            <div>
                hello
            </div>
        : <></>}</div>
    );
}

export default ApiResponses;