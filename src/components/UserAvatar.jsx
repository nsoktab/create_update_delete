import { useEffect, useState } from "react";

export default function UserAvatar({uid}){
   const[user, setUser] = useState({})//user - one single (used in return), setUser - variable where we fetch that single user (used in Effect)

    useEffect(()=>{
        async function getUser(){
            const url = `https://autumn-recipes-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
            console.log(url);
            const response = await fetch (url);
            const data=await response.json();
            setUser(data)
        }
        getUser();
    }, [uid]) //anytime the User Id changes re-render the page


    return(
        <section className="avatar">
            <img src={user.image}></img>
            <div>
            <h3>{user.name}</h3>
            <p>{user.title}</p></div>
        </section>
    )

}