import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../users/UserName';

export default function Header() {
  return (
    <div
      className="font-robotoMono border-b-2
     border-stone-500 bg-yellow-500 p-4 uppercase  sm:px-6  "
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}
