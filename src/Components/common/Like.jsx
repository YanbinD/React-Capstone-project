import React, { Component } from 'react';

//input : Like (boolean)
//Output: onClick 

const Like = ({liked, onLikeClick}) => {
    let classes = "fa fa-heart";
    if (!liked) classes+="-o"
    return (  
        <i onClick={onLikeClick} style={{cursor: "pointer"}} className = {classes} aria-hidden="true"></i>
    );
}
 
export default Like;