import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"; // ES6

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
//   console.log(blogs);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 pr-8">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
