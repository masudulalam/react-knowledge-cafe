import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover_img, author, posted_date, reading_time, author_img, hashtags } = blog;
    return (
        <div className='mb-10'>
            <img src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-8 mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span>{reading_time} min read </span>
                    <button className='text-2xl'>
                        <CiBookmark></CiBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='py-4'>
                {
                    hashtags.map((hash, index) => <span key={index} className='text-xl text-gray-400 mr-4'><a>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;