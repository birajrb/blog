import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blogs && <Bloglist blogs={blogs} title="Anime List" />}
    </div>
  );
};

export default Home;
