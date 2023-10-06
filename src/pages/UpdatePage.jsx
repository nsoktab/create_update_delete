import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgPlaceholder from "../assets/placeholder.png";

export default function UpdatePage() {
  const [post, setPost] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams(); //access parameters of the current route
  const navigate = useNavigate();
  const url = `
    https://autumn-recipes-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`; //get link to the required post

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url); //fetch data from the required post
      const data = await response.json();
      setPost(data);
      setCaption(post.caption);
      setImage(post.image);
    }

    getPost();
  }, [post.caption, post.image, url]);

  async function handleSubmit(event) {
    event.preventDefault();
    const postToUpdate = {
      caption: caption,
      image: image,
      uid: post.uid,
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate),
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }

  async function deletePost(event) {
    event.preventDefault();
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }
  return (
    <section className="page">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <label> Post Title</label>
        <input
          type="text"
          placeholder="Write Post Title"
          required
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        />

        <label> Image</label>
        <input
          type="url"
          placeholder="Paste url for your image"
          value={image}
          required
          onChange={(event) => setImage(event.target.value)}
        />
        <input type="file" className="file-input" accept="image/*" />
        <img
          className="image-preview"
          src={image}
          alt="Choose"
          onError={(event) => (event.target.src = imgPlaceholder)}
        />
        <button>Update Post</button>
      </form>

      <button onClick={deletePost}>Delete Post</button>
    </section>
  );
}
