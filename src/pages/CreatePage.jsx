export default function CreatePage() {
    return (
        <section className="page">
            <h2>Create New Post</h2>
            <form>
                <label> Post Title</label>
                <input type="text" placeholder="Write Post Title" />
                <label> Body</label>
                <input type="text" placeholder="Post Body Text" />
                <label> Image</label>
                <input type="text" placeholder="Post Image URL" />
            </form>
        </section>
    );
}
