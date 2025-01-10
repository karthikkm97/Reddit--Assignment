import { useState, useEffect } from 'react';
import { MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const SORT_OPTIONS = ['Hot', 'New', 'Controversial', 'Rising', 'Top'];

export default function Feed({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState('hot');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track current page
  const postsPerPage = 5; // Display 5 posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Use a CORS proxy service
        const response = await fetch(
          `https://www.reddit.com/r/popular/${sort}.json?limit=20`
        );
        const data = await response.json();
        setPosts(data.data.children.map((child) => child.data)); // Store posts in state
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [sort]);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the posts to be displayed on the current page
  const currentPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  // Handlers for Next and Previous buttons
  const nextPage = () => {
    if (page * postsPerPage < filteredPosts.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex-1 max-auto mx-auto py-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold ml-4">Popular</h1>
        <div className="flex gap-4">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setSort(option.toLowerCase())}
              className={`px-4 py-1 rounded-full ${sort === option.toLowerCase() ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        currentPosts.map((post) => (
          <div key={post.id} className="flex items-col bg-white rounded-lg border-gray-600 shadow-md p-4 mb-8">
            <div className="mr-4">
              <img
                src={
                  post.thumbnail && post.thumbnail.startsWith('http')
                    ? post.thumbnail
                    : 'https://via.placeholder.com/70'
                }
                alt="Thumbnail"
                className="w-16 h-16 rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">Posted by</span>
                  <img
                    src={post.sr_detail?.icon_img || 'https://via.placeholder.com/20'}
                    alt="Author"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="font-medium">{post.author}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(post.created_utc * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="ml-6">
              <ul className="flex flex-col items-start space-y-2 text-sm text-gray-600">
                <li className="flex items-center cursor-pointer hover:underline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {post.num_comments} Comments
                </li>
                <li className="flex items-center cursor-pointer hover:underline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </li>
                <li className="flex items-center cursor-pointer hover:underline">
                  <MoreHorizontal className="w-4 h-4 mr-2" />
                  More
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-between ml-4">
              <button className="text-xl text-gray-500 hover:text-gray-900">
                ▲
              </button>
              <div className="text-center text-gray-700 font-bold">{post.score}</div>
              <button className="text-xl text-gray-500 hover:text-gray-900">
                ▼
              </button>
            </div>
          </div>
        ))
      )}

      {/* Pagination Buttons at the Bottom (Constant) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-80 px-4">
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={page * postsPerPage >= filteredPosts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
