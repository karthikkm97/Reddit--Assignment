import { Search, Home, TrendingUp, ArrowUpNarrowWide, Bell, Mail, User } from 'lucide-react';

export default function Header({ setSearchQuery }) {
  return (
    <header className="flex items-center px-4 h-14 bg-white border-b">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/reddit-logo.svg" alt="Reddit" className="w-8 h-8" />
        <span className="text-xl font-semibold">reddit</span>
      </div>

      {/* Navigation Section */}
      <div className="flex mx-8 ml-auto w-1/3">
        <nav className="flex items-center gap-6 ml-auto">
          <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 rounded-md">
            <Home size={20} />
            <span>Home</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 rounded-md">
            <TrendingUp size={20} />
            <span>Popular</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 rounded-md">
            <ArrowUpNarrowWide size={20} />
            <span>All</span>
          </button>
        </nav>
      </div>

      {/* Search Section */}
      <div className="flex mx-8 ml-auto w-1/3">
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-full">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Find community or post"
            className="bg-transparent border-none outline-none ml-2 w-full"
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
          />
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-4 ml-auto">
        <button className="bg-orange-500 text-white px-8 py-1.5 rounded-md font-medium">
          Create Post
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6 ml-auto">
        <Bell size={20} />
        <Mail size={20} />
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
