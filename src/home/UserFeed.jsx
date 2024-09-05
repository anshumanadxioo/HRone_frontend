import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHandsClapping } from 'react-icons/fa6';
import { FaRegComments } from 'react-icons/fa';
import { IoFilterOutline } from 'react-icons/io5';
import { useColor } from '../pages/colorcontext/ColorContext';
import Loading from '../pages/loading/Loading';

const UserFeed = () => {
  const { color } = useColor();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAll_feed');
        if (response.data && Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load posts. Please try again later.'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />; // Show loading component while fetching data
  }

  if (error) {
    return <div className="error-message">{error}</div>; // Show error message if there's an error
  }

  return (
    <div className="overflow-hidden mb-80 mt-6 flex justify-center w-[100vh]">
      <div className="">
        <div className="relative mt-[220px]">
          <p className="text-xl font-semibold mb-4">Feed</p>
          <IoFilterOutline className="absolute top-0 right-0 mr-1 text-2xl" />
        </div>
        <div className="relative flex flex-col items-start ml-2 w-full max-w-lg px-4 shadow-2xl overflow-y-auto h-[calc(100vh-220px)]">
          {posts.map((post) => (
            <div key={post.id} className="mb-8">
              <div className="flex items-center mb-2">
                <img
                  src={post.imageurl || 'https://via.placeholder.com/150'}  // Fallback image if null
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="mt-4">
                  <p className="font-bold text-base mb-[-3px]">{post.username || 'Unknown'}</p> {/* Default value if null */}
                  <p className="text-gray-600 text-sm mb-[-3px]">{post.brand || 'No Brand'}</p> {/* Default value if null */}
                  <p className="text-gray-600 text-sm mb-[-3px]">{post.position || 'Position Unknown'}</p> {/* Default value if null */}
                  <p className="text-gray-500 text-sm mb-2">{post.timeago || 'Time unknown'}</p> {/* Default value if null */}
                </div>
              </div>

              <hr className="border-t border-gray-300 w-full" />

              <div className="mt-4">
                <p className="text-gray-700 text-base mb-4">
                  {post.description || 'No description available'} {/* Default value if null */}
                </p>
                <img
                  src={post.photo_url}
                  alt="Post"
                  className="w-full h-auto object-cover"
                />
              </div>

              <hr className="border-t border-gray-300 w-full" />

              <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4 text-gray-600">
                    <span>Cheers: {post.cheers || 0}</span> {/* Default value if null */}
                    <span>Comments: {post.comments}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-pink-100 p-4 rounded-lg shadow-md w-full h-16">
                  <FaHandsClapping className="text-black text-4xl p-2 rounded-full bg-white shadow-sm" />
                  <span className="text-black font-semibold">Cheers</span>
                  <FaRegComments className="text-black text-4xl p-2 rounded-full bg-white shadow-sm" />
                  <span className="text-black font-semibold">Comment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
