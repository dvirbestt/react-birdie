import React, {useState} from 'react';

function SubHeader(props) {

    const [selected,setSelected] = useState(false)

    return (
        <div className={"fixed w-2/5 opacity-60 left-1/4 border-2 h-28 flex flex-col border-l-0"}>
            <diV className={"font-bold text-2xl ml-2"}>
                {props.currentLocation}
            </diV>
            <div className={"flex w-full h-full justify-end items-end" }>
                <div onClick={()=> setSelected(false)} className={`home-tabs `}><div className={`${!selected ? " test ": ""}`}>For You</div></div>
                <div onClick={()=> setSelected(true)} className={`home-tabs`}><div className={`${selected ? " test ": ""}`}>Following</div></div>
            </div>

        </div>
    );
}

export default SubHeader;