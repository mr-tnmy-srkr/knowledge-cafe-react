import PropTypes from "prop-types"; // ES6
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div>
      <div className="">
        <img
          className="w-full"
          src={cover}
          alt={`cover pic of title : ${title}`}
        />
      </div>
      <div className="flex justify-between items-center my-8">
        <div className="flex gap-6">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>
            {reading_time} min read{" "}
            <button
              onClick={() => handleAddToBookmarks(blog,id)}
              className="ml-2 text-red-600"
            >
              <BsFillBookmarkStarFill />
            </button>
          </span>
        </div>
      </div>
      <h2 className="text-4xl mt-0 mb-4 font-semibold">{title}</h2>
      <p className="mb-2">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash + "  "}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id,reading_time)}
        className="mb-6 text-purple-800 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
