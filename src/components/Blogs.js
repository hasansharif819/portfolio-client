import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import MyEditor from './MyEditor';


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/blogs')
            .then(response => {
                setBlogs(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch setBlogs:', error);
            });
    }, [blogs]);

    return (
        <div className='container mx-auto' id='blogs'>
            <h1 className='title text-3xl text-center text-gray-300 my-10'>Blogs</h1>

            <div className='w-[100%] mx-auto'>
                {blogs?.map((blog) => <Blog key={blog._id} blog={blog} />)}
            </div>
            <div className="w-[100%] mx-auto mt-10">
                <MyEditor />
            </div>
        </div>
    );
};

export default Blogs;