import React, { useContext, useState } from "react";
import { AppContext } from "../pages";

function Playing() {

    const { currentChar } = useContext(AppContext)

    return (
        <h1 style={{color:"#2196F3"}}>Playing now: <span style={{color: 'rgba(30, 41, 59,0.9)', fontFamily:"fantasy", fontSize:"inherit"}}>{currentChar}</span></h1>
    )
}

export default Playing
