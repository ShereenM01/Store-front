import React from 'react';
import { Link } from 'react-router-dom';



const CartItem = ({item}) => {


  const {id, title, image, price, amount} = item;
  return (
  <section className='flex'>
    <section className='w-full min-h-[150px] flex items-center gap-x-4'>
    <Link to={`/product/${id}`}>
      <img className='max-w-[80px]' src={image} alt='' />
    </Link>
    <section>
      <section>
        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
          {title}</Link>
      </section>
    </section>
    </section>
  </section>);
};

export default CartItem;
