import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Advertising from "./components/Advertising";
import { useState } from "react";


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-blue-50">
      <Header setSearchQuery={setSearchQuery} />
      <div className="flex gap-4 px-4 pt-4">
        <Sidebar />
        <Feed searchQuery={searchQuery} />
        <Advertising />
      </div>
    </div>
  );
}

export default App;
