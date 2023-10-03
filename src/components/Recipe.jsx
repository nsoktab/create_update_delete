export default function Recipe({recipe}){
    return(
        <article key={recipe.id}>
        <h3>{recipe.caption}</h3>
        <img src={recipe.image} alt={recipe.caption}/>
        </article>
    )
}