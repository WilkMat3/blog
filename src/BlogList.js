import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) =>
{

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b) => (

                <div className="blog-preview" key={b.id}>
                    <Link to={`/blogs/${b.id}`}>
                        <h2>{b.title}</h2>
                        <p>Written by {b.author}</p>
                    </Link>

                </div>))}
        </div>
    );
}

export default BlogList;