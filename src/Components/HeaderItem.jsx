/* eslint-disable react/prop-types */
// import React from "react";

const HeaderItem = ({name,Icon}) => {
    return(
        <div className="text-white flex items-center gap-3 cursor-pointer font-semibold text-[17px] hover:underline
        underline-offset-8 mb-3">
            <Icon />
            <h2 className="">{name}</h2>
        </div>
    )
};

export default HeaderItem