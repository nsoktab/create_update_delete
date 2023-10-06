import { useEffect, useState } from "react"
import Recipe from "../components/Post";

export default function RecipesPage(){

    const [recipes, setRecipes] =useState([]);

    useEffect(()=> {
  /*  setRecipes([
    {
        id:1,
        caption:"Pumpkin Soup",
        image:"https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVtcGtpbiUyMHNvdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
        id:2,
        caption:"Mild Curry with Pumpkin",
        image:"https://images.unsplash.com/photo-1612700722193-f0410adb8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VycnklMjB3aXRoJTIwcHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
        id:3,
        caption:"Pumpkin Spice Latte",
        image:"https://images.unsplash.com/photo-1629444984485-efc003bb617f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtcGtpbiUyMHNwaWNlJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
    }
])*/
   async function getRecipes(){
    const url = "https://autumn-recipes-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    const response = await fetch (url); //wait for fetching data from url above
    const data = await response.json();//wait until the data is put into an object
    const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array


    console.log(data);
    console.log(recipesArray);
    setRecipes(recipesArray)
   }

   getRecipes()
},[]
);

    return(
        <section className="page"> 
            <h1>Recipes</h1>
            <section className="grid">
                {recipes.map(item => (
                   <Recipe recipe={item} key={item.id}/>
                ))}
        </section>
        </section>
    )
    }