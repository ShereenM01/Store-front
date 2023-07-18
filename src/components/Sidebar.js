import Reac, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from '../components/CartItem';
import {SidebarContext} from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart} = useContext(CartContext)
  return(
  <section
   className={`${isOpen? 'right-0' :'-right-full'} {'w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] x1:max-w-[30vw] transiton-all duration-300 z-20 px-4 lg:px-[35px]`}
  >
    <section className='flex items-center justify-between py-6 border-b' > 
      <section className='uppercase text-sm font-semibold'>Shopping Bag (0)</section>
      <section  onClick={handleClose}
       className='cursor-pointer w-8 h-8 flex justify-center items-center'
       >
        <IoMdArrowForward className='text-2x1'/>
      </section>
    </section>
    <section>
      {cart.map((item)=>{
        return <CartItem item={item} key={item.id}/>
      })}
    </section>
    </section>
    );
};

export default Sidebar;
