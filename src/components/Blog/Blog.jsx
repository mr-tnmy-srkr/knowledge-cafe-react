import PropTypes from "prop-types"; // ES6
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({ blog,handleAddToBookmarks }) => {
  const { title, cover, reading_time, author, author_img, posted_date,hashtags } = blog;
  
  return (
    <div>
     <div className="">
     <img className="w-full" src={cover} alt={`cover pic of title : ${title}`} />
     </div>
      <div className="flex justify-between items-center my-8">
        <div className="flex gap-6">
          <img className="w-16" src={author_img} alt="" />
          <div >
            <h3 className="text-2xl font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read <button onClick={()=>handleAddToBookmarks(blog)} className="ml-2 text-red-600"><FaRegBookmark/></button></span>
        </div>
      </div>
      <h2 className="text-4xl mt-0 mb-4 font-semibold">{title}</h2>
      <p className="mb-6">
        {hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash+"  "}</a></span>)}
      </p>
    </div>
  );
};

Blog.propTypes = { 
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func

 };

export default Blog;
