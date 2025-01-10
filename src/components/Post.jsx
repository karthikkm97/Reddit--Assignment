import { ArrowUp, ArrowDown, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function Post({ title, author, timestamp, comments, votes, thumbnail }) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg mb-4">
      <div className="flex flex-col items-center gap-1">
        <button className="p-1 hover:bg-gray-100 rounded">
          <ArrowUp size={20} />
        </button>
        <span className="text-sm font-medium">{votes}</span>
        <button className="p-1 hover:bg-gray-100 rounded">
          <ArrowDown size={20} />
        </button>
      </div>

      <div className="flex-1">
        {thumbnail && (
          <img src={thumbnail} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
        )}
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Posted by {author}</span>
          <span>{formatDistanceToNow(timestamp * 1000)} ago</span>
          
          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>{comments} Comments</span>
          </div>
          
          <button className="flex items-center gap-1">
            <Share2 size={16} />
            <span>Share</span>
          </button>
          
          <button>
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}