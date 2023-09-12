import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from "prop-types"; // ES6

const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([])
   
   useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]) 

    return (
        <div className='w-2/3 pr-8'>
      
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks}></Blog>)
        }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks:PropTypes.func
}

export default Blogs;