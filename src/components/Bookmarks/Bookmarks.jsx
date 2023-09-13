
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
   
    return (
        <div className='w-1/3 bg-gray-300 ml-4 pt-2 '>
        <div>
            <h3 className='text-3xl text-center'>Reading Time : {readingTime}</h3>
        </div>
            <h2 className="text-3xl  text-center bg-gray-300">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number,
}

export default Bookmarks