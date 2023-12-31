import { useState } from "react";
import imgPlaceholder from "../assets/placeholder.png";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      caption: caption,
      image: image,
      uid: "ZfPTVEMQKf9vhNiUh0bj",
    };

    const url =
      "https://autumn-recipes-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    console.log(response);

    if (response.ok) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }
  return (
    <section className="page">
      <h2>Create New Post</h2>
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
        <button>Create Inspiration</button>
      </form>
    </section>
  );
}
