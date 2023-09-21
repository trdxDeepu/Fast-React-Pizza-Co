import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity, getTotalPriceQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalPriceQuantity)

  if(!totalCartQuantity || !totalCartPrice) return null

  return (
    <div
      className="flex items-center justify-between bg-stone-800  p-4 px-4 py-4 font-robotoMono uppercase 
    text-stone-200 sm:px-6 sm:text-sm md:text-base "
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
