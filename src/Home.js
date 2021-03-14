import Bloglist from "./BlogList";
import useFakeFetch from "./useFakeFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFakeFetch(
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
