import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function Post({ post }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts/${post.id}`);
    console.log(`/posts/${post.id}`);
  }

  return (
    <article key={post.id} onClick={handleClick}>
      <UserAvatar uid={post.uid} />
      <h3>{post.caption}</h3>
      <img src={post.image} alt={post.caption} />
    </article>
  );
}
