import React from "react"

export const State = () => {

    // LOGIQUE DU COMPOSANT

    // Une variable a un getter et un setter, le getter est pour recuperer la valeur. Le setter pour mettre la valeur

    // On declare la variable count associe a son setter, setCount qui est la function qui permet la mise a jours de la variable
    // Quand le state est mis a jours le composant est re-render
    const [count, setCount] = React.useState(0)

    // On declare la fonction
    const handleClick = (chiffre) => {
        // J'utilise le setter pour mettre a jours le state count
        setCount(current => current + chiffre)
    }

    return (
        <>
            {/* Vue du composant */}
            <h1>{count}</h1>
            <button onClick={() => handleClick(+1)}>Increment</button>
            <button onClick={() => handleClick(-1)}>Decrement</button>
        </>
    )
}