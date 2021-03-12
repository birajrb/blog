import { useParams, useHistory } from "react-router-dom";

import useFetch from "./useFetch";
const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-detail">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written By: {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
