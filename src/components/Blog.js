import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const sliceDes = blog?.description.slice(0, 220);

  useEffect(() => {
    const blogCards = document.querySelectorAll('.blog-card');
    const maxHeight = Math.max(...Array.from(blogCards).map(card => card.clientHeight));
    
    blogCards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <Link
      to={`/blog/${blog?._id}`}
      className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between blog-card relative"
    >
      <figure className="relative flex-shrink-0">
        <img
          src={blog?.img}
          alt="Blog"
          className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <figcaption className="absolute bottom-4 left-4 text-xl font-semibold text-white z-10">
          <span className="title-shadow">{blog?.title}</span>
        </figcaption>
      </figure>

      <div className="p-6 bg-gray-900 text-gray-300 flex-grow">
        <div className="mb-4">
          <p
            dangerouslySetInnerHTML={{ __html: sliceDes+ "..." }}
            className="text-base leading-relaxed"
          />
        </div>
      </div>

      <div className="p-6 bg-gray-900 flex justify-center absolute left-0 right-0 bottom-3">
        <Link
          to={`/blog/${blog?._id}`}
          className="btn btn-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-5 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Read More
        </Link>
      </div>
    </Link>
  );
};

export default Blog;
