/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

// eslint-disable-next-line no-unused-vars
const UpdateItemQuantity = ({ pizzaId,currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>
        {' '}
        -{' '}
      </Button>
      <span className='text-sm font-medium'>{currentQuantity}</span>
      <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>
        {' '}
        +{' '}
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
