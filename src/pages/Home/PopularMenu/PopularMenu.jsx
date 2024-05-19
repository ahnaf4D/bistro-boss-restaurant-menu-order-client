import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`./menu.json`);
      const popularItems = data.filter((item) => item.category === 'popular');
      setMenu(popularItems);
    };
    getData();
  }, []);
  return (
    <div>
      <SectionTitle
        subheading={'Check it out'}
        heading={'FROM OUR MENU'}
      ></SectionTitle>
      <div className='grid  gap-4 container mx-auto my-8 grid-cols-1 md:grid-cols-2'>
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className='mx-auto container text-center mb-6'>
        <button className='btn'>View Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
