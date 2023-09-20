import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../users/UserName';

export default function Header() {
  return (
    <div
      className="flex items-center justify-between 
      border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 font-robotoMono uppercase sm:px-6  "
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}
