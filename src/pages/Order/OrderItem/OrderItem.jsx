import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard/FoodCard';
const OrderItem = ({ items }) => {
  return (
    <div className='grid gap-6 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item) => (
        <FoodCard key={item._id} food={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderItem;
// props types
OrderItem.propTypes = {
  items: PropTypes.object,
};
