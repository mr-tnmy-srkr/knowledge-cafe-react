
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
const [bookmarks,setBookmarks] = useState([]);

 const handleAddToBookmarks = blog =>{
  console.log(blog);
}
 
  return (
    <div className='container mx-auto w-[98%]'>
      <Header></Header>
     <div className='md: flex my-8'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </div>
  )
}

export default App
