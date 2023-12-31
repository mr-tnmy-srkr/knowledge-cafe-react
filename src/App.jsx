import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);



// add to the bookmarks
  const handleAddToBookmarks = (blog,id) => {
    const isExist = bookmarks.find(b=>b.id===id);
    if(isExist){
      alert("Already in Bookmarks");
    }else{
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };



  // add the blog at bookmarks
  const handleMarkAsRead = (id, time) => {
    // setReadingTime(readingTime + time);
    // ....................................................
    const isExist = bookmarks.find(b=>b.id===id);
    if(isExist){
      setReadingTime(readingTime + time)
    }
    // ....................................................
    // remove the blog from bookmarks
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="container mx-auto w-[98%]">
      <Header></Header>
      <div className="md: flex my-8">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
