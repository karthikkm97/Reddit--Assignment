import { User } from 'lucide-react';
import ads from '../image/ads.jpg';
export default function Advertising() {
  return (
    <aside className="w-80 p-4">
      <div className="bg-white rounded-lg p-4 mb-4">
        <img
          src={ads}
          alt="Summer Sale"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold mb-2">SUMMER BIG SALE</h3>
        <p className="text-gray-600 mb-4">Limited time offer!</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold line-through">$300</span>
          <span className="text-2xl font-bold text-orange-500">$79 Only!</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <img src="/reddit-logo.svg" alt="Reddit" className="w-8 h-8 mb-2" />
        <h3 className="text-lg font-bold mb-2">Advertise on Reddit</h3>
        <p className="text-gray-600 mb-4">
          Reach millions of people across Reddit
        </p>
        <button className="w-full bg-orange-500 text-white py-2 rounded-full font-medium">
          GET STARTED
        </button>
      </div>
    </aside>
  );
}