// Je creer un composant Props avec les proprietes name et autre
export const Props = ({ name, autre }) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            {/* On parcours le tableau de prenom pour afficher chaque element dans un h2 */}
            {autre.map(element => <h2 key={element}>{element}</h2>)}
        </div>
    )
}