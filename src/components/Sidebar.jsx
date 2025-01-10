import { User } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const FAVORITES = [
  { name: 'r/funymore', count: 156 },
  { name: 'r/breakingnews', count: 12 },
  { name: 'r/lovestory', count: 0 },
  { name: 'r/gamingfun', count: 98 },
];

const REDDIT_FEEDS = [
  { name: 'r/moview', count: 4 },
  { name: 'r/gaming', count: 0 },
  { name: 'r/pics', count: 32 },
  { name: 'r/gifs', count: 0 },
];

const COMMUNITY = [
  { name: 'r/funymore', count: 0 },
  { name: 'r/breakingnews', count: 0 },
  { name: 'r/gaming', count: 43 },
  { name: 'r/lovestory', count: 12 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-blue-50">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="w-64 p-2 bg-white flex items-center justify-between">
            <span className="text-sm text-black">Filter by</span>
            <ChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="w-64 p-2 flex items-center justify-between">
          <h3 className="text-sm font-medium mb-2">FAVORITES</h3>
          <div className="flex justify-start">
            <span className="text-sm text-black px-5">All</span>
          </div>
        </div>
        {FAVORITES.map((item) => (
          <div key={item.name} className="flex items-center gap-2 py-2">
            <User size={20} className="text-gray-400" />
            <span>{item.name}</span>
            {item.count > 0 && (
              <span className="ml-auto text-sm text-gray-500">
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <div className="w-64 p-2 flex items-center justify-between">
          <h3 className="text-sm font-medium mb-2">REDDIT FEEDS</h3>
          <div className="flex justify-start">
            <span className="text-sm text-black px-5">All</span>
          </div>
        </div>
        {REDDIT_FEEDS.map((item) => (
          <div key={item.name} className="flex items-center gap-2 py-2">
            <User size={20} className="text-gray-400" />
            <span>{item.name}</span>
            {item.count > 0 && (
              <span className="ml-auto text-sm text-gray-500">
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>

      <div>
        <div className="w-64 p-2 flex items-center justify-between">
          <h3 className="text-sm font-medium mb-2">COMMUNITY</h3>
          <div className="flex justify-start">
            <span className="text-sm text-black px-5">All</span>
          </div>
        </div>
        {COMMUNITY.map((item) => (
          <div key={item.name} className="flex items-center gap-2 py-2">
            <User size={20} className="text-gray-400" />
            <span>{item.name}</span>
            {item.count > 0 && (
              <span className="ml-auto text-sm text-gray-500">
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}