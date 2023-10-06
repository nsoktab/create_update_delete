import UserAvatar from "./UserAvatar";

export default function Post({post}){

    return(
        <article key={post.id}>
        <UserAvatar uid={post.uid}/>
        <h3>{post.caption}</h3>
        <img src={post.image} alt={post.caption}/>
        </article>
    )
}