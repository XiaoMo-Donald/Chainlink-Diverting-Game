import React, { useContext, useState } from "react";
import { AppContext } from "../pages";
import styles from '../styles/Home.module.css'
function Playing() {

    const { currentChar } = useContext(AppContext)

    return (
        <h1 style={{color:"#2196F3"}}>Playing now: <span  className={`${styles.scoreText} home-score-text`}>{currentChar}</span></h1>
    )
}

export default Playing
