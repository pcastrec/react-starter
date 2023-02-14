import React from "react"
import { UseEffect } from "./UseEffect"

export const Home = () => {

    
    const [visible, setVisible] = React.useState(true)

    return (
        <>
            {/* Si visible alors j'affiche UseEffect */}
            {visible && <UseEffect />}
            {/* Lors du click j'alterne entre true et false visible */}
            <button onClick={() => setVisible(!visible)}>Visibilité</button>
        </>
    )
}

export const HomeTwo = () => {
    return (
        <h1>HomeTwo</h1>
    )
}