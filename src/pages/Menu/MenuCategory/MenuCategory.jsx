import MenuItem from '../../Shared/MenuItem/MenuItem';
import PropTypes from 'prop-types';
const MenuCategory = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      <div className='grid  gap-4 container mx-auto my-8 grid-cols-1 md:grid-cols-2'>
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
// Prop types
MenuCategory.propTypes = {
  items: PropTypes.array,
};
