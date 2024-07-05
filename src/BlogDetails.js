import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetails = () =>
{
    const history = useHistory();

    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const handleClick = () =>
    {
        fetch('http://localhost:8000/blogs/' + data.id,
            {
                method: 'Delete'

            }
        ).then(() =>
        {
            history.push('/');
        });

    }
    return (<div className="blog-details">
        {error && <div>{error}</div>}
        {isPending && <div>Loading</div>}
        {data && (
            <article>
                <h2>
                    {data.title}
                </h2>
                <p>
                    Written by {data.author}
                </p>
                <div>
                    {data.body}
                </div>
                <button
                    onClick={handleClick}>Delete</button>
            </article>


        )}
    </div>);
}

export default BlogDetails; <div className="blog-details">
</div>