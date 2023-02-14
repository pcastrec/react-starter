import React from "react"

// Il est important de mettre une majuscule au nom du composant (pas au nom du fichier)
export const UseEffect = () => {
    
    const [update, setUpdate] = React.useState(false)

    // Une fois le composant render/affiché on execute cette function
    // syntax particuliere (() => {}, [])
    React.useEffect(() => {
        // Si on met un addEventListener ici 
        console.log('CONSTRUCTOR')
        // return () => Destructor
        return () => console.log('DESTROY')
        // Le tableau permet de rappeler la fonction lorsque la variable a l'intérieur change
    }, [update])
    
    return (
        <div>
            <h1>Coucou</h1>
            <button onClick={() => setUpdate(!update)}>Update</button>
        </div>
    )
}