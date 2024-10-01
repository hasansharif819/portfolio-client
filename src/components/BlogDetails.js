import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://portfolio-server-ten-eta.vercel.app/api/v1/blogs/${id}`);
        setBlog(response.data.data);
        console.log("blog ===== ", blog)
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id, blog]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto bg-gray-50">
      {/* Hero section with overlay */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={blog?.img}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">{blog?.title}</h1>
        </div>
      </div>

      {/* Blog content */}
      <div className="w-[90%] lg:w-[70%] mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-4xl font-semibold text-gray-900">{blog?.title}</h2>
            <p className="text-gray-500 italic">Published on: {new Date(blog?.createdAt).toDateString()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {/* <img
                src="/path-to-author-image.jpg"
                alt={blog?.author}
                className="w-12 h-12 rounded-full object-cover mr-3"
              /> */}
              <div>
                <p className="text-lg font-medium text-gray-900">{blog?.author}</p>
                <p className="text-gray-500 text-sm">{blog?.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog description */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">Blog Content</h3>
          <div
            className="prose prose-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog?.description }}
          />
        </div>

        {/* Additional sections */}
        <div className="flex justify-between items-center">
          {/* Share buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">Share</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-500">Like</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-900 text-gray-100 py-8 mt-16">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Blog Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
